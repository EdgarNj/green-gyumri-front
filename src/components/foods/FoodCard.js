import React from 'react';
import PropTypes from "prop-types";

function FoodCard(props) {
    const {food: f, index: i, slideIndex, show, change} = props;

    return (
        <figure className="foodCard">
            <img src={f.image.path} alt={f.name}/>
            <div className='btnBlock'>
                <button
                    className={`recipeBtn  ${slideIndex === i && show ? null : 'active'}`}
                    onClick={() => slideIndex === i ? change(false) : null}>Recipe
                </button>
                <button
                    className={`recipeBtn ${slideIndex === i && show ? 'active' : null}`}
                    onClick={() => slideIndex === i ? change(true) : null}>Calculator
                </button>
            </div>
        </figure>
    );
}

export default FoodCard;

FoodCard.propTypes = {
    food: PropTypes.object.isRequired,
    index: PropTypes.number,
    slideIndex: PropTypes.number,
    show: PropTypes.bool.isRequired,
    change: PropTypes.func.isRequired,
};
