import React from 'react';
import PropTypes from "prop-types";
import foodImage from '../../assets/images/foods.jpg';

function FoodCard(props) {
    const {food: f, index: i, slideIndex, show, change} = props;

    return (
        <figure className="foodCard">
            <img
                src={f.image.path}
                alt={f.name}
                onError={(e) => e.target.src = foodImage}
            />
            <div className='btnBlock'>
                <button
                    className={`recipeBtn  ${slideIndex === i && show ? '' : 'active'}`}
                    onClick={() => slideIndex === i ? change(false) : null}>Recipe
                </button>
                <button
                    className={`recipeBtn ${slideIndex === i && show ? 'active' : ''}`}
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
