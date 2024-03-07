import React from 'react';
import PropTypes from 'prop-types';
function MenuButton(props) {
    const {setOpen,isOpen} = props
    return (
        <div className={`toggleButton ${isOpen ? 'active' : ''}`}>
            <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={()=>{setOpen(!isOpen)}}>
                <div className={`line-1 ${isOpen ? 'active' : ''}`}></div>
                <div className={`line-2 ${isOpen ? 'active' : ''}`}></div>
                <div className={`line-3 ${isOpen ? 'active' : ''}`}></div>
            </div>
        </div>
    );
}

export default MenuButton;

MenuButton.propTypes = {
    setOpen: PropTypes.func.isRequired,
    isOpen:PropTypes.bool.isRequired
};
