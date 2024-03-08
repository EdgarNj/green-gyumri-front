import React from 'react';
import PropTypes from "prop-types";

function ServiceArticle(props) {
    const {onClick, el:{title,id, image}} = props;
    return (
        <article onClick={()=>{onClick(id)}} style={{backgroundImage: `url(${image?.path})`}} className='serviceArticle'>
            <h3>{title}</h3>
        </article>
    );
}

export default ServiceArticle;

ServiceArticle.propTypes = {
    el: PropTypes.object,
    title: PropTypes.string,
    image: PropTypes.object,
    onClick:PropTypes.func.isRequired
};
