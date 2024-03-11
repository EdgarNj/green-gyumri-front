import React from 'react';
import PropTypes from "prop-types";

function ProvidesCard(props) {
    const {datum} = props
    return (
        <figure className="provide__card">
            <img src={datum.icon.path} alt={datum.title}/>
            <figcaption>
                <p>{datum.title}</p>
            </figcaption>
        </figure>
    );
}

export default ProvidesCard;
ProvidesCard.propTypes = {
    datum: PropTypes.object.isRequired
}
