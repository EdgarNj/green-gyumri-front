import React, {useCallback, useRef, useState} from 'react';
import {ReactComponent as SliderIcon} from "../../../assets/icons/homeSlider/visitors.svg";
import {ReactComponent as OpenIcon} from "../../../assets/icons/homeSlider/polygon.svg";
import {CSSTransition} from 'react-transition-group';
import OutsideClickHandler from "react-outside-click-handler";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {setVisitorsCount} from "../../../store/actions/book/book";
import PropTypes from "prop-types";


function Visitors(props) {
    const {isValid} = props
    const dispatch = useDispatch()
    const visitorsCount = useSelector(state => state.book.visitorsCount)

    const [open, setOpen] = useState(false)
    const barRef = useRef(null)
    const {t} = useTranslation()

    const handleChangeVisitor = useCallback((variant) => {

        if (variant === "plus" && visitorsCount < 50) {
            dispatch(setVisitorsCount({count: visitorsCount + 1}))

        } else if (variant === "minus" && visitorsCount > 0) {
            dispatch(setVisitorsCount({count: visitorsCount - 1}))
        }
    }, [visitorsCount])


    const handleOpen = useCallback(() => {
        setOpen(!open)
    }, [open])

    const handleOutsideClick = () => {
        setOpen(false);
    };

    return (

        <div ref={barRef} className={`visitors__container ${isValid ? "" : "error"}`}>
            <OutsideClickHandler onOutsideClick={handleOutsideClick}>
                <div onClick={() => {
                    handleOpen()
                }} className="banner__container">
                    <div className="title__part">
                        <SliderIcon/>
                        <p>
                            {`${t("Number of visitors")} ${visitorsCount && !open ? visitorsCount : ""}`}
                        </p>
                    </div>
                    <button  className="button">
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
                                    <p>{visitorsCount}</p>
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
    isValid: PropTypes.bool
}
Visitors.defaultProps = {
    isValid: true
}
