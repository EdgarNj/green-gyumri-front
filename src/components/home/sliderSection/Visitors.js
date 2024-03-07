import React, {useCallback, useRef, useState} from 'react';
import {ReactComponent as SliderIcon} from "../../../assets/icons/homeSlider/visitors.svg";
import {ReactComponent as OpenIcon} from "../../../assets/icons/homeSlider/polygon.svg";
import {CSSTransition} from 'react-transition-group';
import OutsideClickHandler from "react-outside-click-handler";

function Visitors() {
    const [visitorCount, setVisitorCount] = useState(0)
    const [open, setOpen] = useState(false)
    const barRef = useRef(null)
    const handleChangeVisitor = useCallback((variant) => {

        if (variant === "plus" && visitorCount < 50) {
            setVisitorCount((state) => state + 1)
        } else if (variant === "minus" && visitorCount > 0) {
            setVisitorCount((state) => state - 1)
        }

    }, [visitorCount])

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
                            Number of visitors
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

                            <div className="visitors__title_box">
                                <h3>Visitors</h3>
                            </div>
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
