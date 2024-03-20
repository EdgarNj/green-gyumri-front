import React, {useCallback} from 'react';
import PriceForm from "./PriceForm";
import CardForm from "./CardForm";
import PayWith from "./PayWith";
import {Stripe} from "stripe";
import {useDispatch, useSelector} from "react-redux";
import {setFormErrorText, setReservationData} from "../../store/actions/book/book";
import {useNavigate} from "react-router-dom";

const stripe = new Stripe('pk_test_51OeP0WLiImV3YhpMVHvkVmFuSuDh6TgCXy94nso9I0cDgmMWxzEX4MgW1DCHbDPjFTU2o98woVdKizlvNvH8cy5b00NBrf1gwa');

function FormSection() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {visitorsCount, percent, currency, bookDate} = useSelector(state => state.book)
    const handleSubmit = useCallback(async (values) => {
        try {
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
            if (id) {
                dispatch(setReservationData({
                    bookInfo: {
                        cardNumber,
                        cardholderName,
                        email,
                        tokenId: id
                    }
                }))
                navigate("confirm")
            }
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
