import React from 'react';
import PropTypes from "prop-types";
import CelebrateBoxPc from "./CelebrateBoxPc";
import Carousel from "nuka-carousel";

function CelebrateBoxMobile(props) {
    // eslint-disable-next-line no-unused-vars
    const {datum: {images, title}, isRevers} = props;
    return (

        <article className="celebrate__mobile_box">
            <h3 className="celebrate__item_title">{title}</h3>

            <div className="slider__container">
                <Carousel
                    slidesToShow={1.2}
                    cellSpacing={5}
                    renderCenterLeftControls={null}
                    renderCenterRightControls={null}
                    renderBottomCenterControls={null}
                    wrapAround={true}
                >
                    {images.map(image => {
                        return (
                            <figure className="slider__item" key={image.id}>
                                <img className="slider__img" src={image.path} alt={title}/>
                            </figure>
                        );
                    })}
                </Carousel>
            </div>
        </article>
    );
}

CelebrateBoxMobile.propTypes = {
    datum: PropTypes.object.isRequired,
    isRevers: PropTypes.bool.isRequired
}

export default CelebrateBoxMobile;
CelebrateBoxPc.propTypes = {
    datum: PropTypes.object.isRequired,
    isRevers: PropTypes.bool.isRequired
}
