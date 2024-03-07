import React from 'react';
import Visitors from "./Visitors";
import Arrival from "./Arrival";
import {useMediaQuery} from "usehooks-ts";
import BookButton from "./BookButton";

function SliderContent(props) {
    // eslint-disable-next-line react/prop-types
    const {sliderTitle} = props
    const isMobile = useMediaQuery('(max-width: 1200px)')




    return (
        <div className="slider__content">
            <h1 className="slider__title">{sliderTitle}</h1>
            {!isMobile &&
                <div className="book__part">
                    <Visitors/>
                    <Arrival/>
                    <BookButton/>
                </div>}
        </div>
    );
}

export default SliderContent;
