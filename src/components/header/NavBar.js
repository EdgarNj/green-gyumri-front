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
                    <NavLink to="/">{t("Book")}</NavLink>
                </li>
                <li>
                    <NavLink to="/">{t("Recipes")}</NavLink>
                </li>
                <li>
                    <NavLink to="/">{t("Services")}</NavLink>
                </li>
                <li>
                    <NavLink to="/">{t("Gyumri")}</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
