import React, {useEffect, useState} from 'react';
import PartialRange from "./PartialRange";
import PreviewPrice from "./PreviewPrice";
import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {setPercent} from "../../store/actions/book/book";

function PartialBox(props) {
    const {values} = props
    const {t} = useTranslation()
    // eslint-disable-next-line no-unused-vars
    const [partialPay, setPartialPay] = useState(true)
    const [previewValue, setPreviewValue] = useState(values)
    const percent = useSelector(state => state.book.percent)
    const dispatch = useDispatch()

    useEffect(() => {

        const paidPercent = percent / 100;
        const {usd, amd, rub} = values

        if (partialPay) {
            setPreviewValue({
                usd: Math.round((usd * paidPercent)),
                amd: Math.round((amd * paidPercent)),
                rub: Math.round((rub * paidPercent)),
            })
        } else {
            dispatch(setPercent({percent:100}))
            setPreviewValue(values)
        }


    }, [percent, values, partialPay])

    return (
        <div className="partial__pay_box">
            <div className="partial__pay_button">

                <div onClick={() => {
                    setPartialPay(!partialPay)
                }}
                     className={`partial__btn ${partialPay ? "clicked" : ""}`}>
                    <div className="inside__dot "></div>
                </div>

                <p>{partialPay ? t("Partial payment") : t("Full Payment")}</p>
            </div>
            <div className="partial__pay_range">
                {partialPay && <PartialRange/>
                }            </div>
            <div className="partial__pay_price">
                <PreviewPrice values={previewValue}/>
            </div>
        </div>
    );
}

export default PartialBox;


PartialBox.propTypes = {
    values: PropTypes.object.isRequired
}
