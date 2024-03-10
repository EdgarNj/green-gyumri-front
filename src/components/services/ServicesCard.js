import React from 'react';
import PropTypes from "prop-types";

function ServicesCard(props) {
    const {onClick, el:{title,id, image}} = props;
    return (
        <figure className='card' onClick={()=>{onClick(id)}}>
            <img src={image.path} alt="img"/>
            <figcaption className='cardTitleBox' >
                <h3 className='cardTitle' >{title}</h3>
            </figcaption>
        </figure>
    );
}

export default ServicesCard;

ServicesCard.propTypes = {
    el: PropTypes.object,
    title: PropTypes.string,
    image: PropTypes.object,
    onClick:PropTypes.func.isRequired
};
