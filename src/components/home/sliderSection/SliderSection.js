import React, {useEffect} from 'react';
import HomeSlider from "./HomeSlider";
import SliderContent from "./SliderContent";
import {useDispatch, useSelector} from "react-redux";
import {getHomeSliderDataRequest} from "../../../store/actions/home";


function SliderSection() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getHomeSliderDataRequest())
    }, []);
    // eslint-disable-next-line no-unused-vars
    const {title, images} = useSelector(state => state.home.sliderData)

    return (
        <section className="slider__section">
            <div className="background"/>
            <HomeSlider images={images}/>
            <SliderContent sliderTitle={title} />

        </section>
    );
}

export default SliderSection;
