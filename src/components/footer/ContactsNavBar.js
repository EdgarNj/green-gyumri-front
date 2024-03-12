import React from 'react';
import PropTypes from "prop-types";
import {ReactComponent as Phone} from "../../assets/icons/services/phone.svg";

function ContactsNavBar(props) {
    const {contact: {address, email, phone}, weblinks} = props;

    return (
        <nav className='nav'>
            <ul className='nav_block'>
                <li className='nav_list'>
                    <p className="address"> {address} </p>
                </li>
                <li className='nav_list'>
                    <a href={`mailto:${email}`} className="email"> {email} </a>
                </li>
                <li className='nav_list'>
                    <Phone/>
                    <a href={`tel:${phone}`} className="phone">{phone} </a>
                </li>
            </ul>
            <ul className='nav_block'>
                {
                    weblinks.map(l => (
                        <li className='nav_list' key={l.id}>
                            <a href={l.url} className="nav_link" target='blank'>
                                <img src={l.icon.path} alt={l.title} title={l.title}/>
                            </a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}

export default ContactsNavBar;


ContactsNavBar.propTypes = {
    contact: PropTypes.object.isRequired,
    weblinks: PropTypes.array.isRequired
};
