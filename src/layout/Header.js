import React from 'react';
import {useMediaQuery} from 'usehooks-ts'
import GreenGyumriLogo from "../components/GreenGyumriLogo";
import PcMenu from "../components/header/PcMenu"
import MobileMenu from "../components/header/MobileMenu";

function Header() {
    const isMobile = useMediaQuery('(max-width: 1200px)')

    return (
        <header className="header">

            <figure>
                <GreenGyumriLogo/>
            </figure>
            {isMobile ? <MobileMenu/> : <PcMenu/>}


        </header>
    );
}

export default Header;
