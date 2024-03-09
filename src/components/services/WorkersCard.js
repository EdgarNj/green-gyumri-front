import React from 'react';
import {ReactComponent as Message} from "../../assets/icons/services/message.svg";
import {ReactComponent as Phone} from "../../assets/icons/services/phone.svg";
import {ReactComponent as Websitie} from "../../assets/icons/services/website.svg";
import PropTypes from "prop-types";

function WorkersCard(props) {
    const {el} = props;

    return (
        <figure className='workersCard'>
            <figcaption className='item'>
                <img src={el.image.path} alt="img"/>
                <div className='titleBlock'>
                    <h4> {el.fullName} </h4>
                    <p> {el.workplace} </p>
                </div>
            </figcaption>
            <div className='box'>
                <div className='textBlock'>
                    <span className='icon'>{<Phone/>}</span>
                    <p className='text'>
                        {el.phone}
                    </p>
                </div>
                <div className='textBlock'>
                    <span className='icon'>{<Message/>}</span>
                    <p className='text middle'>
                        {el.email}
                    </p>
                </div>
                <div className='textBlock'>
                    <span className='icon'>{<Websitie/>}</span>
                    <p className='text'>
                        {el.website}
                    </p>
                </div>
            </div>
        </figure>
    );
}

export default WorkersCard;

WorkersCard.propTypes = {
    el: PropTypes.object.isRequired,
};
