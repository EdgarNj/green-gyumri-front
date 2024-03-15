import React from 'react';
import {useTranslation} from "react-i18next";

function TitleBox() {
    const {t} = useTranslation()
    return (
        <div className="title__box">
            <h2>{t("Booking")}</h2>
        </div>
    );
}

export default TitleBox;
