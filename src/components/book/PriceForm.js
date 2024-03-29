import React, {useEffect, useState} from 'react';
import Arrival from "../home/sliderSection/Arrival";
import Visitors from "../home/sliderSection/Visitors";
import PreviewPrice from "./PreviewPrice";
import PartialBox from "./PartialBox";
import {useSelector} from "react-redux";
import PropTypes from "prop-types";


function PriceForm(props) {
    const {isValid: {isValidDate, isValidVisitors}} = props
    // eslint-disable-next-line no-unused-vars
    const visitorsCount = useSelector(state => state.book.visitorsCount)
    const [fullPrice, setFullPrice] = useState({usd: 0, rub: 0, amd: 0})
    const {guestPrice, minPrice, minPeople} = useSelector(state => state.book.prices)


    useEffect(() => {
        if (visitorsCount >= minPeople) {
            const addVisitorsPrice = visitorsCount - minPeople;

            const usd = minPrice.usd + (addVisitorsPrice * guestPrice.usd);
            const amd = minPrice.amd + (addVisitorsPrice * guestPrice.amd);
            const rub = minPrice.rub + (addVisitorsPrice * guestPrice.rub);

            setFullPrice({usd, amd, rub});
        } else {
            const usd = minPrice.usd;
            const amd = minPrice.amd;
            const rub = minPrice.rub;
            setFullPrice({usd, amd, rub});
        }
    }, [visitorsCount, guestPrice, minPrice, minPeople]);

    return (
        <div className="price__form_box">
            <div className="write__info_box">
                <div className="arrival__visitors__box">
                    <div className="arrival__book_select">
                        <Arrival isValid={isValidDate}/>
                    </div>
                    <div className="visitors__book_select">
                        <Visitors isValid={isValidVisitors}/>
                    </div>
                </div>
                <div className="previous__price">
                    <div className="box">
                        <PreviewPrice values={fullPrice}/>
                    </div>
                </div>
            </div>

            <div className="partial__box">
                <PartialBox values={fullPrice}/>
            </div>
        </div>
    );
}

export default PriceForm;


PriceForm.propTypes = {
    isValid: PropTypes.shape({
        isValidDate: PropTypes.bool.isRequired,
        isValidVisitors: PropTypes.bool.isRequired
    }).isRequired
};
