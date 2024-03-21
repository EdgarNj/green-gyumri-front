import React, {useCallback, useState} from 'react';
import PriceForm from "./PriceForm";
import CardForm from "./CardForm";
import PayWith from "./PayWith";
import {Stripe} from "stripe";
import {useDispatch, useSelector} from "react-redux";
import {setFormErrorText, setReservationData} from "../../store/actions/book/book";
import {useNavigate} from "react-router-dom";

const stripe = new Stripe('pk_test_51OeZe7GYKkovkPnaIYrvEwM8uXXVlsyDwpTk7ePURp2mLzAqvf4duCfFU8Zx0HW1M6zM6gGSD1EHyYqn9FL4r3UW00mNogjGou');

function FormSection() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {visitorsCount, percent, currency, bookDate} = useSelector(state => state.book)
    const [isValidDate, setValidData] = useState(true)
    const [isValidVisitors, setValidVisitors] = useState(true)
    const handleSubmit = useCallback(async (values) => {
        try {
            setValidData(true)
            setValidVisitors(true)

            if (!bookDate || !visitorsCount) {
                setValidData(bookDate)
                setValidVisitors(!!visitorsCount)
                return
            }


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
            <PriceForm isValid={{isValidDate, isValidVisitors}}/>
            <PayWith/>
            <CardForm onSubmit={handleSubmit}/>
        </div>
    );
}

export default FormSection;
