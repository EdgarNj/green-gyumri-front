import React, {useCallback, useRef, useState} from 'react';
import {ReactComponent as OpenBtn} from "../../assets/icons/book/openBtn.svg";
import AmdIcon from "../../assets/icons/book/dram.svg";
import UsdIcon from "../../assets/icons/book/usd.svg";
import RubIcon from "../../assets/icons/book/rub.svg";
import {CSSTransition} from 'react-transition-group';
import PropTypes from "prop-types";
import OutsideClickHandler from "react-outside-click-handler";
import {setCurrency} from "../../store/actions/book/book";
import {useDispatch, useSelector} from "react-redux";

const options = [
    {
        id: 1,
        currency: "amd",
        icon: AmdIcon
    },
    {
        id: 2,
        currency: "rub",
        icon: RubIcon
    },
    {
        id: 3,
        currency: "usd",
        icon: UsdIcon
    },
];

function PreviewPrice(props) {
    const {values} = props;
    const dispatch = useDispatch()
    const nodeRef = useRef(null)
    const [open, setOpen] = useState(false);
    const actualCurrency = useSelector(state => state.book.currency)


    const handleChangeCurrency = useCallback((cur) => {
        dispatch(setCurrency({currency: cur}))
    }, [])


    return (
        <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
            <div ref={nodeRef} className="currency__dropdown">

                <div onClick={() => {
                    setOpen(!open)
                }} className="dropdown__closed">
                    <img src={options.find(data => data.currency === actualCurrency).icon} alt=""/>
                    <p>{values[actualCurrency]}</p>
                    <OpenBtn className="open__btn"/>
                </div>

                <CSSTransition
                    in={open}
                    nodeRef={nodeRef}
                    timeout={400}
                    classNames="currency__dropdown"
                    unmountOnExit
                    onEnter={() => setOpen(true)}
                    onExited={() => setOpen(false)}
                >
                    <div className="hidden__elem_box">

                        {options.map((data) => {
                            if (data.currency === actualCurrency) return null;
                            return (
                                <div
                                    className="hidden__elem"
                                    key={data.id}
                                    onClick={() => {
                                        handleChangeCurrency(data.currency);
                                        setOpen(false);
                                    }}
                                >
                                    <img src={data.icon} alt=""/>
                                    <p>{values[data.currency]}</p>
                                </div>
                            );
                        })}
                    </div>
                </CSSTransition>

            </div>
        </OutsideClickHandler>
    );
}

export default PreviewPrice;


PreviewPrice.propTypes = {
    values: PropTypes.object.isRequired
}
