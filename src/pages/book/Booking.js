import React from 'react';
import Wrapper from "../../components/Wrapper";
import TitleBox from "../../components/book/TitleBox";
import FormSection from "../../components/book/FormSection";
import bookBg from "../../assets/images/book.png"
function Booking() {
    return (
        <Wrapper>
            <section style={{backgroundImage: `url(${bookBg})`}} className="book__section">
                <TitleBox/>
                <FormSection/>
            </section>
        </Wrapper>
    );
}

export default Booking;
