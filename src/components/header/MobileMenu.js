import React from 'react';
import ChangeMode from "../customization/ChangeMode";
import MobileNavBar from "./MobileNavBar";

function MobileMenu() {
    return (
        <div className="mobile__menu">
            <ChangeMode/>
            <MobileNavBar/>
        </div>
    );
}

export default MobileMenu;
