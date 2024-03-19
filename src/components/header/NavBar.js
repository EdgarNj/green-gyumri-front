import React from 'react';
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

function NavBar() {
    const {t} = useTranslation()
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink to="/">{t("Home")}</NavLink>
                </li>
                <li>
                    <NavLink to="/book">{t("Book")}</NavLink>
                </li>
                <li>
                    <NavLink to="/foods">{t("Recipes")}</NavLink>
                </li>
                <li>
                    <NavLink to="/services">{t("Services")}</NavLink>
                </li>
                <li>
                    <NavLink to="/gyumri">{t("Gyumri")}</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
