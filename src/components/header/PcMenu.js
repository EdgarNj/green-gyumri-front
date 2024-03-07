import React from 'react';
import NavBar from "./NavBar";
import ChangeLang from "../customization/ChangeLang";
import ChangeMode from "../customization/ChangeMode";
import {ReactComponent as Phone} from "../../assets/icons/header/phone.svg";

function PcMenu() {
    return (
        <div className="navbar__pc">
            <NavBar/>
            <div className="control__container">


            <ChangeLang/>
            <div className="contact">
                <Phone/>
                <div>
                <a href='tel:093675839'>093 67 58 39</a>
                </div>
            </div>
            <ChangeMode/>
            </div>
        </div>

    );
}

export default PcMenu;
