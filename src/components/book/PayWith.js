import React from 'react';
import {useTranslation} from "react-i18next";
import visa from '../../assets/icons/book/cardVariants/visa.png'
import arca from '../../assets/icons/book/cardVariants/arca.png'
import master from '../../assets/icons/book/cardVariants/master.png'

function PayWith() {
    const {t} = useTranslation()
    return (
        <div className="pay__with_box">
            <div className="title__box">
                <p>{t("Pay with")}</p>
            </div>
            <div className="icons__box">
                <img title="Visa" src={visa} alt="Visa"/>
                <img title="Master" src={master} alt="Master"/>
                <img title="Arca" src={arca} alt="Arca"/>
            </div>
        </div>
    );
}

export default PayWith;
