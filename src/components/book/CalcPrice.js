import React from 'react';
import Arrival from "../header/Arrival";
import PreviewPrice from "./PreviewPrice";
import Visitors from "../header/Visitors";
import PartialPay from "./PartialPay";
import PayWith from "./PayWith";
import CardForm from "./CardForm";

function CalcPrice(props) {
    return (
        <div className="calc__price_box">
            <div className="calendar">
                <Arrival/>
                <PreviewPrice/>
            </div>
            <div className="visitors__box">
                <Visitors/>
            </div>
            <PartialPay/>
            <PayWith/>
            <CardForm/>
        </div>
    );
}

export default CalcPrice;