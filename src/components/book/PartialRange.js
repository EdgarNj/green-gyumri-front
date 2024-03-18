import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setPercent} from "../../store/actions/book/book";

function PartialRange() {
    const dispatch = useDispatch()
    const percent = useSelector(state => state.book.percent)
    const handleChange = (event) => {
        dispatch(setPercent({percent: parseInt(event.target.value, 10)}))

    };


    const textPosition = {
        position: "absolute",
        left: `${(percent - 20) / 80 * 80}%`,
        top: "35px",
        fontSize: "18px"
    };

    return (
        <div className="partial__range">
            <input
                type="range"
                min={20}
                max={100}
                step={10}
                value={percent}
                onChange={handleChange}
            />
            <p style={textPosition}>{percent + "%"}</p>
        </div>
    );
}

export default PartialRange;

