import React from 'react';
import Wrapper from "../components/Wrapper";
import SliderSection from "../components/home/sliderSection/SliderSection";
import AboutSection from "../components/home/about/AboutSection";
import ProvidesSection from "../components/home/weProvides/ProvidesSection";

function Home() {

    return (
        <Wrapper className="home__wrapper">
            <SliderSection/>
            <AboutSection/>
            <ProvidesSection/>
        </Wrapper>
    );
}

export default Home;
