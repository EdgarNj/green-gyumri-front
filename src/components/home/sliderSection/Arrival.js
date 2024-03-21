import React, {useEffect, useRef, useState} from 'react';
import {CSSTransition} from 'react-transition-group';
import OutsideClickHandler from 'react-outside-click-handler';
import {ReactComponent as CalendarIcon} from '../../../assets/icons/homeSlider/calendar.svg';
import {ReactComponent as OpenIcon} from '../../../assets/icons/homeSlider/polygon.svg';
import Calendar from "./Calendar";
import moment from "moment";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {setBookDay} from "../../../store/actions/book/book";
import PropTypes from "prop-types";

function Arrival(props) {
    const {isValid} = props
    const openRef = useRef(null);
    const bookData = useSelector(state => state.book.bookDate)
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()
    const [date, setData] = useState(bookData ? moment(bookData) : null)
    const {t} = useTranslation()
    const handleOutsideClick = () => {
        setOpen(false);
    };
    useEffect(() => {
        if (date) {
            dispatch(setBookDay({date: date.toISOString()}))
        }
    }, [date])

    return (

        <div ref={openRef} className={`arrival__container ${isValid ? "" : "error"}`}>
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
                            <Calendar date={date} changeData={setData}/>
                        </div>
                    </>
                </CSSTransition>
            </OutsideClickHandler>
        </div>
    );
}

export default Arrival;

Arrival.propTypes = {
    isValid: PropTypes.bool
}
Arrival.defaultProps = {
    isValid: true
}
