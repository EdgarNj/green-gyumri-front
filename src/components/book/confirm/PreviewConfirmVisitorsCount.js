import React from 'react';
import {ReactComponent as VisitorsIcon} from "../../../assets/icons/homeSlider/visitors.svg";
import {useTranslation} from "react-i18next";
import PropTypes from "prop-types";

function PreviewConfirmVisitorsCount(props) {
    // eslint-disable-next-line react/prop-types
    const {count} = props
    const {t} = useTranslation()
    return (
        <div className="preview__confirm_visitors">
            <VisitorsIcon/>
            <p>{`${t("Number of visitors")} ${count}`}</p>
        </div>
    );
}

export default PreviewConfirmVisitorsCount;

PreviewConfirmVisitorsCount.propTypes = {
    count: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
PreviewConfirmVisitorsCount.defaultProps = {
    count: ""
}

