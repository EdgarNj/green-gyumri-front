import React from 'react';
import PropTypes from "prop-types";

function CelebrateBoxPc(props) {
    const {datum: {images, title}, isRevers} = props;

    return (
        <article className="celebrate__item">
            <h3 className="celebrate__item_title">{title}</h3>
            <div className="figure__item_container">
                {isRevers
                    ? images.slice().reverse().map((image) => (
                        <figure
                            className={`celebrate__img ${image.orientation === "vertical" ? "vertical" : "horizontal"}`}
                            key={image.id}>
                            <img src={image.path} alt={title}/>
                        </figure>
                    ))
                    : images.map((image) => (
                        <figure
                            className={`celebrate__img ${image.orientation === "vertical" ? "vertical" : "horizontal"}`}
                            key={image.id}>
                            <img src={image.path} alt={title}/>
                        </figure>
                    ))
                }
            </div>
        </article>
    );
}

export default CelebrateBoxPc;

CelebrateBoxPc.propTypes = {
    datum: PropTypes.object.isRequired,
    isRevers: PropTypes.bool.isRequired
}
