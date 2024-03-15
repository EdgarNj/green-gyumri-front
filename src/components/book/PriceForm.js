import React from 'react';
import Arrival from "../home/sliderSection/Arrival";
import Visitors from "../home/sliderSection/Visitors";

function PriceForm() {
    return (
        <div className="price__form_box">
            <div className="write__info_box">
                <Arrival/>
                <Visitors changeVisitors={() => {
                }}/>
            </div>
            <div className="previous__price">

            </div>
            <div className="partial__box">

            </div>
        </div>
    );
}

export default PriceForm;
