import React from 'react';
import Wrapper from "../../components/Wrapper";
import TitleBox from "../../components/book/TitleBox";
import FormSection from "../../components/book/FormSection";
import bookBg from "../../assets/images/book.png"

function Booking() {
    return (
        <Wrapper>
            <section className="book__section">
                <figure className="book__section_bg">
                    <img src={bookBg} alt="Book"/>
                </figure>
                <div className="container">
                    <TitleBox/>
                    <FormSection/>
                </div>
            </section>
        </Wrapper>
    );
}

export default Booking;
