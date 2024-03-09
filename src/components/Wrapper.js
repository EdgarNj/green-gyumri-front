import React from 'react';
import PropTypes from 'prop-types';
import Header from "../layout/Header";
import {useSelector} from "react-redux";

function Wrapper(props) {
    const {children, className} = props
    const mode = useSelector(state => state.customization.mode)
    const lang = useSelector(state => state.customization.lang)
    return (
        <div className={`wrapper ${className} ${mode} ${lang}`}>
            <Header/>
            {children}
        </div>
    );
}

export default Wrapper;

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

Wrapper.defaultProps = {
    className: "",
}
