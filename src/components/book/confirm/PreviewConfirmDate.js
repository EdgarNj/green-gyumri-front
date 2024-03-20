import React from 'react';
import {ReactComponent as CalendarIcon} from "../../../assets/icons/homeSlider/calendar.svg";
import PropTypes from "prop-types";
import moment from "moment/moment";

function PreviewConfirmDate(props) {
    const {date} = props
    return (
        <div className="confirm__preview_date">
            <CalendarIcon/>
            <p>{moment(date).format('DD/MM/YYYY')}</p>
        </div>
    );
}

export default PreviewConfirmDate;

PreviewConfirmDate.propTypes = {
    date: PropTypes.string.isRequired
}
