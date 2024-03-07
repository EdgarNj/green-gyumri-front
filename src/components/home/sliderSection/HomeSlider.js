import React from 'react';
import PropTypes from "prop-types";
import Carousel from "nuka-carousel"

function HomeSlider(props) {
    const {images} = props
    return (
        <div  className="home__slider">
        <Carousel className="test" autoplay={true}  defaultControlsConfig={{
            prevButtonClassName: "noneBtn",
            nextButtonClassName: "noneBtn",
            pagingDotsContainerClassName: "dotsContainer",
        }}>
            {images.map(datum => (
                <div key={datum.id} className='carousel__img_box'>
                <img  src={datum.path} alt=""/>
                </div>
            ))}
        </Carousel>
        </div>
    );
}

export default HomeSlider;
HomeSlider.propTypes = {
    images: PropTypes.array.isRequired,
    className: PropTypes.string
};

