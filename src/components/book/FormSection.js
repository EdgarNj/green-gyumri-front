import React, {useCallback} from 'react';
import PriceForm from "./PriceForm";
import CardForm from "./CardForm";
import PayWith from "./PayWith";
import {Stripe} from "stripe";
import {useDispatch, useSelector} from "react-redux";
import {setFormErrorText} from "../../store/actions/book/book";
import Api from "../../Api";

const stripe = new Stripe('pk_test_51OeZe7GYKkovkPnaIYrvEwM8uXXVlsyDwpTk7ePURp2mLzAqvf4duCfFU8Zx0HW1M6zM6gGSD1EHyYqn9FL4r3UW00mNogjGou');

function FormSection() {
    const dispatch = useDispatch()
    const {visitorsCount, percent, currency, bookDate} = useSelector(state => state.book)
    const handleSubmit = useCallback(async (values) => {
        try {
            let {cardNumber, cvv, expiration, cardholderName, email} = values;
            const number = cardNumber.replaceAll(" ", "");
            const exp_month = expiration.split("/")[0];
            const exp_year = 20 + parseInt(expiration.split("/")[1]);

            const {id} = await stripe.tokens.create({
                card: {
                    number,
                    exp_month,
                    exp_year,
                    cvc: cvv,
                },
            });

            (async () => {
                try {
                    // tokenId: Joi.string().trim().required(),
                    //     guestNumber: Joi.number().min(1).max(50).required(),
                    //     email: Joi.string().trim().email().max(50),
                    //     fullName: Joi.string().trim().max(30).required(),
                    //     date: Joi.date().iso().min('now').required(),
                    //     currency: Joi.string().valid('amd', 'rub', 'usd').required(),
                    //     percent: Joi.number().min(20).max(100).required(),


                    const {data} = await Api.createReservation({
                        tokenId: id,
                        guestNumber: visitorsCount,
                        percent: percent,
                        currency,
                        fullName: cardholderName,
                        email,
                        date: bookDate
                    })

                    console.log(data)
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
