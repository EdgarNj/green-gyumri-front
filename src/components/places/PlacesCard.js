import React, {useCallback} from 'react';
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";

function PlacesCard(props) {
    const {datum: {id, image, title}} = props
    const navigate = useNavigate()

    const handleRedirect = useCallback((id) => {
        navigate(`/places/${id}`)
    }, [])

    return (
        <article onClick={() => {
            handleRedirect(id)
        }} className="places__card">
            <figure>
                <img className="places__card_img"
                     src={image.path}
                     title={title}
                     alt={title}/>
                <figcaption className="places__card_title">
                    <h2>
                        {title}
                    </h2>
                </figcaption>
            </figure>

        </article>
    );
}

export default PlacesCard;
PlacesCard.propTypes = {
    datum: PropTypes.object.isRequired
}
