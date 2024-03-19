import React, {useCallback} from 'react';
import PriceForm from "./PriceForm";
import CardForm from "./CardForm";
import PayWith from "./PayWith";
import {Stripe} from "stripe";
import {useDispatch, useSelector} from "react-redux";
import {setFormErrorText} from "../../store/actions/book/book";
import Api from "../../Api";
import {loadStripe} from '@stripe/stripe-js';

const stripe = new Stripe('pk_test_51OeZe7GYKkovkPnaIYrvEwM8uXXVlsyDwpTk7ePURp2mLzAqvf4duCfFU8Zx0HW1M6zM6gGSD1EHyYqn9FL4r3UW00mNogjGou');
const stripePromise = loadStripe('pk_test_51OeZe7GYKkovkPnaIYrvEwM8uXXVlsyDwpTk7ePURp2mLzAqvf4duCfFU8Zx0HW1M6zM6gGSD1EHyYqn9FL4r3UW00mNogjGou');

function FormSection() {
    const dispatch = useDispatch()

    const {visitorsCount, percent, currency, bookDate} = useSelector(state => state.book)
    const handleSubmit = useCallback(async (values) => {
        try {
            const newStripe = await stripePromise;


            let {cardNumber, cvv, expiration, cardholderName, email} = values;
            const number = cardNumber.replaceAll(" ", "");
            const exp_month = expiration.split("/")[0];
            const exp_year = "20" + parseInt(expiration.split("/")[1]);


            const {id} = await stripe.tokens.create({
                card: {
                    number,
                    exp_month,
                    exp_year,
                    cvc: cvv,
                },
            });


            (async () => {
                console.log(bookDate)
                try {

                    const {data} = await Api.createReservation({
                        tokenId: id,
                        guestNumber: visitorsCount,
                        percent: percent,
                        currency,
                        fullName: cardholderName,
                        email,
                        date: bookDate
                    })
                    console.log(data, "form")

                    const result = await newStripe.confirmCardPayment(data.client_secret, {
                        payment_method: data.paymentMethodId
                    });


                    console.log(result,"<---- result")
                } catch (e) {
                    console.log(e)
                }
            })()

        } catch (err) {
            dispatch(setFormErrorText({
                code: err.code,
                message: err.message
            }));

        }
    }, [dispatch, visitorsCount, percent, currency, bookDate]);

    return (
        <div className="forms__container">
            <PriceForm/>
            <PayWith/>
            <CardForm onSubmit={handleSubmit}/>
        </div>
    );
}

export default FormSection;

//
// import React, {useCallback} from 'react';
// import PriceForm from "./PriceForm";
// import CardForm from "./CardForm";
// import PayWith from "./PayWith";
// import {useDispatch, useSelector} from "react-redux";
// import {setFormErrorText} from "../../store/actions/book/book";
// import Api from "../../Api";
// import {loadStripe} from '@stripe/stripe-js';
//
// const stripePromise = loadStripe('pk_test_51OeZe7GYKkovkPnaIYrvEwM8uXXVlsyDwpTk7ePURp2mLzAqvf4duCfFU8Zx0HW1M6zM6gGSD1EHyYqn9FL4r3UW00mNogjGou');
//
// function FormSection() {
//     const dispatch = useDispatch();
//
//     const {visitorsCount, percent, currency, bookDate} = useSelector(state => state.book);
//
//     const handleSubmit = useCallback(async (values) => {
//         try {
//             const {cardNumber, cvv, expiration, cardholderName, email} = values;
//             const number = cardNumber.replaceAll(" ", "");
//             const exp_month = expiration.split("/")[0];
//             const exp_year = "20" + parseInt(expiration.split("/")[1]);
//
//             const stripe = await stripePromise;
//
//             const {error: stripeError, paymentMethod} = await stripe.createPaymentMethod({
//                 type: 'card',
//                 card: {
//                     number,
//                     exp_month,
//                     exp_year,
//                     cvc: cvv,
//                 },
//                 billing_details: {
//                     name: cardholderName,
//                     email,
//                 },
//             });
//
//             if (stripeError) {
//                 throw new Error(stripeError.message);
//             }
//
//             eslint - disable - next - line
//             no - unused - vars
//             const {id: paymentMethodId} = paymentMethod;
//
//             Make
//             API
//             call
//             to
//             your
//             backend
//             to
//             create
//             a
//             PaymentIntent
//             const response = await Api.createPaymentIntent({
//                 amount: /* amount in cents */,
//                 currency: currency,
//                 payment_method: paymentMethodId,
//                 description: "Booking payment",
//                 email: email
//             });
//
//             if (response.requires_action) {
//                 If
//                 3
//                 D
//                 Secure
//                 authentication
//                 is
//                 required, handle
//                 it
//                 const result = await stripe.confirmCardPayment(response.client_secret, {
//                     payment_method: paymentMethodId
//                 });
//
//                 if (result.error) {
//                     throw new Error(result.error.message);
//                 }
//             }
//
//             If
//             payment
//             successful, proceed
//             with reservation creation
//             const reservationResponse = await Api.createReservation({
//                 tokenId: paymentMethodId,
//                 guestNumber: visitorsCount,
//                 percent: percent,
//                 currency,
//                 fullName: cardholderName,
//                 email,
//                 date: bookDate
//             });
//
//             console.log(reservationResponse);
//
//         } catch (err) {
//             dispatch(setFormErrorText({
//                 code: err.code,
//                 message: err.message
//             }));
//             console.log(err)
//         }
//     }, [dispatch, visitorsCount, percent, currency, bookDate]);
//
//     return (
//         <div className="forms__container">
//             <PriceForm/>
//             <PayWith/>
//             <CardForm onSubmit={handleSubmit}/>
//         </div>
//     );
// }
//
// export default FormSection;
