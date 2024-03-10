import React, {useRef, useState} from 'react';
import {CSSTransition} from 'react-transition-group';
import OutsideClickHandler from 'react-outside-click-handler';
import {ReactComponent as CalendarIcon} from '../../../assets/icons/homeSlider/calendar.svg';
import {ReactComponent as OpenIcon} from '../../../assets/icons/homeSlider/polygon.svg';
import Calendar from "./Calendar";
import moment from "moment";
import {useTranslation} from "react-i18next";

function Arrival() {
    const openRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [date, setData] = useState(null)
    const {t} = useTranslation()
    const handleOutsideClick = () => {
        setOpen(false);
    };

    return (
        <div ref={openRef} className="arrival__container">
            <OutsideClickHandler onOutsideClick={handleOutsideClick}>
                <div className="closed__bar">
                    <div className="closed__bar_name">
                        <CalendarIcon/>
                        <p>{` ${date && !open ? moment(date).format('DD-MM-YYYY') : `${t("Arrival")}`}`} </p>
                    </div>
                    <button onClick={() => setOpen(!open)} className="closed__bar_btn">
                        <OpenIcon/>
                    </button>
                </div>
                <CSSTransition unmountOnExit nodeRef={openRef} in={open} timeout={400} classNames="arrival__container">
                   <>
                    <div className="line"></div>
                    <div className="opened__bar">
                        <Calendar changeData={setData}/>
                    </div>
                   </>
                </CSSTransition>
            </OutsideClickHandler>
        </div>
    );
}

export default Arrival;
