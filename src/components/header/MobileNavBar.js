import React, {useRef, useState} from 'react';
import MenuButton from './MenuButton';
import {CSSTransition} from 'react-transition-group';
import NavBar from './NavBar';
import ChangeLang from '../customization/ChangeLang';
import OutsideClickHandler from 'react-outside-click-handler';
import {ReactComponent as Phone} from '../../assets/icons/header/phone.svg';

function MobileNavBar() {
    const [open, setOpen] = useState(false);
    const nodeRef = useRef(null);

    return (
        <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
            <div className="mobile_nav_bar">
                <MenuButton isOpen={open} setOpen={setOpen}/>
                <CSSTransition
                    in={open}
                    nodeRef={nodeRef}
                    timeout={400}
                    classNames="toggle-bar"
                    unmountOnExit
                >
                    <div ref={nodeRef} className={`menu__container ${open ? 'open' : ''}`}>
                        <NavBar/>
                        <ChangeLang/>
                        <div className="contact">
                            <Phone/>
                            <div>
                                <a href="tel:093675839">093 67 58 39</a>
                            </div>
                        </div>
                    </div>
                </CSSTransition>
            </div>
        </OutsideClickHandler>
    );
}

export default MobileNavBar;
