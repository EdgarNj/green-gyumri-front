import React, {useCallback, useState} from 'react';
import Visitors from "./Visitors";
import Arrival from "./Arrival";
import {useMediaQuery} from "usehooks-ts";
import BookButton from "./BookButton";
import PropTypes from "prop-types";

function SliderContent(props) {
    const {sliderTitle} = props
    const isMobile = useMediaQuery('(max-width: 1200px)')
    // eslint-disable-next-line no-unused-vars
    const [bookInfo, setBookInfo] = useState({
        visitors: 0,
        date: null
    })
    const handleNavigate = useCallback(() => {


    }, [])


    return (
        <div className="slider__content">
            <h1 className="slider__title">{sliderTitle}</h1>
            {!isMobile &&
                <div className="book__part">
                    <Visitors/>
                    <Arrival/>
                    <BookButton onClick={handleNavigate}/>
                </div>}
        </div>
    );
}

export default SliderContent;

SliderContent.propTypes = {
    sliderTitle: PropTypes.string
}
SliderContent.defaultProps = {
    sliderTitle: ""
}
