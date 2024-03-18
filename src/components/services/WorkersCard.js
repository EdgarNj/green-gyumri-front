import React from 'react';
import {ReactComponent as Message} from "../../assets/icons/services/message.svg";
import {ReactComponent as Phone} from "../../assets/icons/services/phone.svg";
import {ReactComponent as Website} from "../../assets/icons/services/website.svg";
import PropTypes from "prop-types";
import person from '../../assets/images/person.png';

function WorkersCard(props) {
    const {el} = props;

    return (
        <figure className='workersCard'>
            <figcaption className='item'>
                <img src={el.image.path + 1} alt="img" onError={(e) => e.target.src = person} />
                <div className='titleBlock'>
                    <h4> {el.fullName} </h4>
                    <p> {el.workplace} </p>
                </div>
            </figcaption>
            <div className='box'>
                <div className='textBlock'>
                    <span className='icon'>{<Phone/>}</span>
                    <a href={`tel:${el.phone}`} className='text'>
                        {el.phone}
                    </a>
                </div>
                <div className='textBlock'>
                    <span className='icon'>{<Message/>}</span>
                    <a href={`mailto:${el.email}`} className='text middle'>
                        {el.email}
                    </a>
                </div>
                <div className='textBlock'>
                    <span className='icon'>{<Website/>}</span>
                    <a href={el.website} className='text' target='blank'>
                        {el.website}
                    </a>
                </div>
            </div>
        </figure>
    );
}

export default WorkersCard;

WorkersCard.propTypes = {
    el: PropTypes.object.isRequired,
};
