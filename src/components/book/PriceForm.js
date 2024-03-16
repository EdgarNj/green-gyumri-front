import React from 'react';
import Arrival from "../home/sliderSection/Arrival";
import Visitors from "../home/sliderSection/Visitors";
import PreviewPrice from "./PreviewPrice";


function PriceForm() {
    return (
        <div className="price__form_box">
            <div className="write__info_box">
                <div className="arrival__book_select">
                    <Arrival/>
                </div>
                <div className="visitors__book_select">
                    <Visitors changeVisitors={() => {
                    }}/>
                </div>

            </div>
            <div className="previous__price">
                <PreviewPrice values={{usd: "50000", amd: "40000", rub: "30000"}}/>
            </div>
            <div className="partial__box">

            </div>
        </div>
    );
}

export default PriceForm;
