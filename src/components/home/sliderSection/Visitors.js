import React, {useCallback, useEffect, useRef, useState} from 'react';
import {ReactComponent as SliderIcon} from "../../../assets/icons/homeSlider/visitors.svg";
import {ReactComponent as OpenIcon} from "../../../assets/icons/homeSlider/polygon.svg";
import {CSSTransition} from 'react-transition-group';
import OutsideClickHandler from "react-outside-click-handler";
import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";

function Visitors(props) {
    const {changeVisitors} = props
    const [visitorCount, setVisitorCount] = useState(0)
    const [open, setOpen] = useState(false)
    const barRef = useRef(null)
    const {t} = useTranslation()

    const handleChangeVisitor = useCallback((variant) => {

        if (variant === "plus" && visitorCount < 50) {
            setVisitorCount((state) => state + 1)
        } else if (variant === "minus" && visitorCount > 0) {
            setVisitorCount((state) => state - 1)
        }
    }, [visitorCount])

    useEffect(() => {
        changeVisitors(visitorCount)
    }, [visitorCount]);


    const handleOpen = useCallback(() => {
        setOpen(!open)
    }, [open])

    const handleOutsideClick = () => {
        setOpen(false);
    };

    return (

        <div ref={barRef} className={`visitors__container`}>
            <OutsideClickHandler onOutsideClick={handleOutsideClick}>
                <div className="banner__container">
                    <div className="title__part">
                        <SliderIcon/>
                        <p>
                            {`${t("Number of visitors")} ${visitorCount && !open ? visitorCount : ""}`}
                        </p>
                    </div>
                    <button onClick={() => {
                        handleOpen()
                    }} className="button">
                        <OpenIcon/>
                    </button>
                </div>
                <CSSTransition unmountOnExit nodeRef={barRef} in={open} timeout={350} classNames="visitors__container">
                    <div>
                        <div className="line"/>
                        <div className="menu__bar">

                            <div className="change__visitor_box">
                                <button className="change__visitor_btn" onClick={() => {
                                    handleChangeVisitor("minus")
                                }}>-
                                </button>
                                <div className="previous__visotor">
                                    <p>{visitorCount}</p>
                                </div>
                                <button className="change__visitor_btn" onClick={() => {
                                    handleChangeVisitor("plus")
                                }}>+
                                </button>

                            </div>
                        </div>
                    </div>
                </CSSTransition>
            </OutsideClickHandler>
        </div>

    );
}

export default Visitors;

Visitors.propTypes = {
    changeVisitors: PropTypes.func.isRequired
}
