import React from 'react';
import Wrapper from "../components/Wrapper";
import SliderSection from "../components/home/sliderSection/SliderSection";

function Home() {

    return (
        <Wrapper className="home__wrapper">
            <SliderSection/>
            <div style={{height: "200px", width: "100%"}}></div>
        </Wrapper>
    );
}

export default Home;
