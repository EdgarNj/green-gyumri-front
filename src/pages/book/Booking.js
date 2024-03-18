import React, {useEffect} from 'react';
import Wrapper from "../../components/Wrapper";
import TitleBox from "../../components/book/TitleBox";
import FormSection from "../../components/book/FormSection";
import bookBg from "../../assets/images/book.png"
import {getPriceListData, getReservedDaysData} from "../../store/actions/book/book";
import {useDispatch} from "react-redux";

function Booking() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPriceListData())
        dispatch(getReservedDaysData())
    }, [])
    return (
        <Wrapper>
            <section className="book__section">
                <figure className="book__section_bg">
                    <img src={bookBg} alt="Book"/>
                </figure>

                <TitleBox/>
                <FormSection/>
            </section>
        </Wrapper>
    );
}

export default Booking;
