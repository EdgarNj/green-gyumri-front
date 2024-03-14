import React from 'react';
import PropTypes from "prop-types";

function Compositions(props) {

    const {data} = props;

    return (
        <div id='block'>
            {
                data.map(el => (
                    <div key={el.id} className='item_block'>
                        <div className='item_name'>
                            <img src={el.icon.path} alt={el.name}/>
                            <p className='name' >{el.name}</p>
                        </div>
                        <div className="item_info">
                            <p className='count' >{el.count} {el.unit}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Compositions;


Compositions.propTypes = {
    data: PropTypes.array.isRequired,
};
