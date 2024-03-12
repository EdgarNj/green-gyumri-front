import React, {useEffect} from 'react';
import GreenGyumriLogo from "../components/GreenGyumriLogo";
import NavBar from "../components/header/NavBar";
import {useDispatch, useSelector} from "react-redux";
import {getContactsDataRequest} from "../store/actions/footer/contacts";
import {getWeblinksDataRequest} from "../store/actions/footer/links";
import ContactsNavBar from "../components/footer/ContactsNavBar";

function Footer() {
    const dispatch = useDispatch();
    const {contacts} = useSelector(state => state.contacts);
    const {weblinks} = useSelector(state => state.weblinks);
    console.log(weblinks, 878787)
    useEffect(() => {
        dispatch(getContactsDataRequest());
        dispatch(getWeblinksDataRequest());
    }, [])

    return (
        <footer id='footer'>
            <div className="container">
                <section className="content">
                    <figure className='logoBox'>
                        <GreenGyumriLogo/>
                    </figure>
                    <NavBar/>
                    <ContactsNavBar contact={contacts} weblinks={weblinks} />
                </section>
            </div>
        </footer>
    );
}

export default Footer;
