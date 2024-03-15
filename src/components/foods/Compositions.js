import React from 'react';
import PropTypes from "prop-types";

function Compositions(props) {

    let {data, percent, visitorsNumber} = props;

    if (visitorsNumber <= 0) {
        visitorsNumber = 1
    }

    return (
        <div id='block'>
            {
                data.map(el => {
                    let newCount = el.count * visitorsNumber;

                    if (percent > 0) {
                        newCount += newCount / 10;
                    } else if (percent < 0) {
                        newCount -= newCount / 10;
                    }

                    return (
                        <div key={el.id} className='item_block'>
                            <div className='item_name'>
                                <img src={el.icon.path} alt={el.name}/>
                                <p className='name'>{el.name}</p>
                            </div>
                            <div className="item_info">
                                <p className='count'>{newCount} {el.unit}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
        ;
}

export default Compositions;


Compositions.propTypes = {
    data: PropTypes.array.isRequired,
    percent: PropTypes.number,
    visitorsNumber: PropTypes.number,
};
