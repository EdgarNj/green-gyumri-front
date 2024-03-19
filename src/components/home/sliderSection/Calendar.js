import React, {useState} from 'react';
import CalendarComponent from "react-calendar";
import {useSelector} from "react-redux";
import getLanguageData from "../../../utils/getLanguageDate";
import {ReactComponent as ChevronLeft} from "../../../assets/icons/homeSlider/chevronLeft.svg";
import {ReactComponent as ChevronRight} from "../../../assets/icons/homeSlider/chevronRight.svg";
import moment from 'moment';
import PropTypes from "prop-types";

function Calendar(props) {
    const {changeData, date} = props
    const lang = useSelector(state => state.customization.lang);
    const {monthLabels, weekdayLabels, monthShortLabels} = getLanguageData(lang);
    const transactions = useSelector(state => state.book.reservedDays)
    const [activeDate, setActiveDate] = useState(date);

    const isDateDisabled = date => {
        const formattedDate = moment(date).format('YYYY-MM-DD');
        return moment(date).isBefore(moment(), 'day') || transactions.some(transaction => moment(transaction.date).format('YYYY-MM-DD') === formattedDate);
    };

    const handleClickDay = day => {
        setActiveDate(day);
        changeData(day)
    };


    const tileClassName = ({date}) => {
        if (isDateDisabled(date)) {
            return 'disabled';
        }
        if (moment(date).isSame(activeDate, 'day')) {
            return 'active';
        }
        return null;
    };

    return (
        <CalendarComponent
            next2Label={null}
            onClickDay={handleClickDay}
            prev2Label={null}

            prevLabel={<ChevronLeft/>}
            nextLabel={<ChevronRight/>}
            formatMonthYear={(locale, date) => monthLabels[date.getMonth()]}
            formatShortWeekday={(locale, date) => weekdayLabels[date.getDay()]}
            formatMonth={(locale, date) => monthShortLabels[date.getMonth()]}
            showNeighboringMonth={false}
            tileDisabled={({date}) => isDateDisabled(date)}
            tileClassName={tileClassName}
        />
    );
}

export default Calendar;

Calendar.propTypes = {
    date: PropTypes.object,
    changeData: PropTypes.func.isRequired
}
Calendar.defaultProps = {
    date: {}
}
