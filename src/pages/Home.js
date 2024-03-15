import React from 'react';
import Wrapper from "../components/Wrapper";
import SliderSection from "../components/home/sliderSection/SliderSection";
import AboutSection from "../components/home/about/AboutSection";
import ProvidesSection from "../components/home/weProvides/ProvidesSection";
import CelebrateSection from "../components/home/celebrate/CelebrateSection";
import NewsSection from "../components/home/newsSection/NewsSection";
import MapSection from "../components/home/mapSection/MapSection";
import LastSection from "../components/home/lastSection/LastSection";

function Home() {

    return (
        <Wrapper className="home__wrapper">
            <SliderSection/>
            <AboutSection/>
            <ProvidesSection/>
            <CelebrateSection/>
            <NewsSection/>
            <MapSection/>
            <LastSection/>
        </Wrapper>
    );
}

export default Home;
