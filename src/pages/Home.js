import React from 'react';
import Wrapper from "../components/Wrapper";
import SliderSection from "../components/home/sliderSection/SliderSection";
import AboutSection from "../components/home/about/AboutSection";
import ProvidesSection from "../components/home/weProvides/ProvidesSection";
import CelebrateSection from "../components/home/celebrate/CelebrateSection";
import NewsSection from "../components/home/newsSection/NewsSection";

function Home() {

    return (
        <Wrapper className="home__wrapper">
            <SliderSection/>
            <AboutSection/>
            <ProvidesSection/>
            <CelebrateSection/>
            <NewsSection/>
        </Wrapper>
    );
}

export default Home;
