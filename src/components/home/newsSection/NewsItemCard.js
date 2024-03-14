import React from 'react';
import PropTypes from "prop-types";

function NewsItemCard(props) {
    const {datum: {title, description, image, date}} = props

    return (
        <figure className="news__item">
            <div className="date">
                <span>
                {date.split(" ")[0]}
                </span>
                <span>
                {date.split(" ")[1]}
                </span>
            </div>
            <img className="image" src={image.path} alt={title}/>
            <figcaption className="title__box">
                <h3 className="item__title">{title}</h3>
                <p className="item__desc">{description}</p>
            </figcaption>
        </figure>
    );
}

export default NewsItemCard;
NewsItemCard.propTypes = {
    datum: PropTypes.object.isRequired
}
