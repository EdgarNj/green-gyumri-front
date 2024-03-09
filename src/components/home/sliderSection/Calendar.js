import React, {useState} from 'react';
import CalendarComponent from "react-calendar";
import {useSelector} from "react-redux";
import getLanguageData from "../../../utils/getLanguageDate";
import {ReactComponent as ChevronLeft} from "../../../assets/icons/homeSlider/chevronLeft.svg";
import {ReactComponent as ChevronRight} from "../../../assets/icons/homeSlider/chevronRight.svg";
import moment from 'moment';
import PropTypes from "prop-types";

function Calendar(props) {
    const {changeData} = props
    const lang = useSelector(state => state.customization.lang);
    const {monthLabels, weekdayLabels, monthShortLabels} = getLanguageData(lang);

    const [activeDate, setActiveDate] = useState(null); // State to keep track of active date

    const transactions = [
        {
            id: 1,
            date: '2024-03-07T22:42:01.909Z'
        },
        {
            id: 2,
            date: '2024-03-07T22:42:01.909Z'
        },
        {
            id: 3,
            date: '2024-03-07T22:42:01.909Z'
        }
    ]; // Assuming this is your transactions data

    // Function to check if a date is disabled
    const isDateDisabled = date => {
        const formattedDate = moment(date).format('YYYY-MM-DD');
        return transactions.some(transaction => moment(transaction.date).format('YYYY-MM-DD') === formattedDate);
    };

    // Function to handle click on day
    const handleClickDay = day => {
        setActiveDate(day);
        changeData(day)
    };

    // Function to add class to the tile based on date
    const tileClassName = ({date}) => {
        if (isDateDisabled(date)) {
            return 'disabled'; // Set custom class for disabled dates
        }
        if (moment(date).isSame(activeDate, 'day')) {
            return 'active'; // Set custom class for active date
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
            tileDisabled={({date}) => isDateDisabled(date)} // Disable specific days
            tileClassName={tileClassName}
        />
    );
}

export default Calendar;

Calendar.propTypes = {
    changeData: PropTypes.func.isRequired
}
