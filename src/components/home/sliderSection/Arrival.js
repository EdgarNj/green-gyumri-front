import React, {useRef, useState} from 'react';
import {CSSTransition} from 'react-transition-group';
import OutsideClickHandler from "react-outside-click-handler";
import {ReactComponent as CalendarIcon} from "../../../assets/icons/homeSlider/calendar.svg";
import {ReactComponent as OpenIcon} from "../../../assets/icons/homeSlider/polygon.svg";

function Arrival() {
    const openRef = useRef(null)
    const [open, setOpen] = useState(false)

    const handleOutsideClick = () => {
        setOpen(false);
    };
    return (

        <div ref={openRef} className="arrivial__container">
            <OutsideClickHandler onOutsideClick={handleOutsideClick}>
                <div className="closed__bar">
                    <div className="closed__bar_name">
                        <CalendarIcon/>
                        <p>
                            Arrival
                        </p>
                    </div>
                    <button onClick={() => {
                        setOpen(!open)
                    }} className="closed__bar_btn">
                        <OpenIcon/>
                    </button>
                </div>
                <CSSTransition unmountOnExit nodeRef={openRef} in={open} timeout={350} classNames="arrivial__container">
                    <div className="opened__bar">

                    </div>
                </CSSTransition>
            </OutsideClickHandler>
        </div>

    );
}

export default Arrival;
