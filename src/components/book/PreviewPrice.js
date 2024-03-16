import React, {useRef, useState} from 'react';
import {ReactComponent as OpenBtn} from "../../assets/icons/book/openBtn.svg";
import UsdIcon from "../../assets/icons/book/dram.svg";
import AmdIcon from "../../assets/icons/book/usd.svg";
import RubIcon from "../../assets/icons/book/rub.svg";
import {CSSTransition} from 'react-transition-group';
import PropTypes from "prop-types";
import OutsideClickHandler from "react-outside-click-handler";

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
    const nodeRef = useRef(null)
    const [open, setOpen] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState(0);

    return (
        <div ref={nodeRef} className="currency__dropdown">
            <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
                <div onClick={() => {
                    setOpen(!open)
                }} className="dropdown__closed">
                    <img src={options[selectedCurrency].icon} alt=""/>
                    <p>{values[options[selectedCurrency].currency]}</p>
                    <OpenBtn className="open__btn" />
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

                        {options.map((data, index) => {
                            if (index === selectedCurrency) return null;
                            return (
                                <div
                                    className="hidden__elem"
                                    key={data.id}
                                    onClick={() => {
                                        setSelectedCurrency(index);
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
            </OutsideClickHandler>
        </div>
    );
}

export default PreviewPrice;


PreviewPrice.propTypes = {
    values: PropTypes.object.isRequired
}
