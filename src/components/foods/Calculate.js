import React from 'react';
import Visitors from "../home/sliderSection/Visitors";
import PropTypes from "prop-types";

function Calculate(props) {
    const {value, changeVisitors, change} = props;

    return (
        <div className='calculateBlock'>
            <Visitors changeVisitors={changeVisitors}/>
            <label className='range_block'>
                <input
                    value={value}
                    type="range"
                    min={-10}
                    max={10}
                    step={10}
                    onChange={(e) => change(e.target.value)}
                />
                <span className='range_title' onClick={() => { change(-10) }}>min</span>
                <span className='range_title' onClick={() => { change(0) }}>mid</span>
                <span className='range_title' onClick={() => { change(10) }}>max</span>
            </label>
        </div>
    );
}

export default Calculate;

Calculate.propTypes = {
    value: PropTypes.number.isRequired,
    changeVisitors: PropTypes.func.isRequired,
    change: PropTypes.func.isRequired,
};
