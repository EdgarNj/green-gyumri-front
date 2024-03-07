import React, {useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ReactComponent as Language} from '../../assets/icons/customization/changeLang/language.svg';
import {ReactComponent as Russia} from '../../assets/icons/customization/changeLang/ru.svg';
import {ReactComponent as Armenia} from '../../assets/icons/customization/changeLang/am.svg';
import {ReactComponent as English} from '../../assets/icons/customization/changeLang/en.svg';
import {ReactComponent as Polygon} from '../../assets/icons/customization/changeLang/polygon.svg';
import {changeLanguage} from "../../store/actions/customization";
import OutsideClickHandler from "react-outside-click-handler";
import {useTranslation} from 'react-i18next';
import {CSSTransition} from 'react-transition-group';

function ChangeLang() {
    const lang = useSelector((state) => state.customization.lang);
    const dispatch = useDispatch();
    const {i18n} = useTranslation();

    const [open, setOpen] = useState(false);

    const languages = [
        {code: 'en', icon: <English/>, label: 'ENG'},
        {code: 'ru', icon: <Russia/>, label: 'RUS'},
        {code: 'hy', icon: <Armenia/>, label: 'ARM'},
    ];

    const handleChangeLang = useCallback(
        (lang) => {
            dispatch(changeLanguage({lang}));
            i18n.changeLanguage(lang);
            setOpen(false);
        },
        [dispatch, i18n]
    );

    const langeCodes = {
        en: 'ENG',
        ru: 'RUS',
        hy: 'ARM',
    };

    return (
        <div className="lang_main_container">
            <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
                <div className={`lang_dropdown ${open ? 'open' : ''}`}>
                    <div className="box__container">
                        <div
                            onClick={() => {
                                setOpen(!open);
                            }}
                            className="lang__container"
                        >
                            <Language className="lang"/>
                            <span>{langeCodes[lang]}</span>
                            <Polygon className="polygon"/>
                        </div>
                        <CSSTransition
                            in={open}
                            timeout={300}
                            classNames="fade"
                            unmountOnExit
                        >
                            <div className="langs">
                                <div className="line"/>
                                {languages.map((langItem) =>
                                    lang !== langItem.code ? (
                                        <div
                                            onClick={() => {
                                                handleChangeLang(langItem.code);
                                            }}
                                            className="lang"
                                            key={langItem.code}
                                        >
                                            {langItem.icon}
                                            <span>{langItem.label}</span>
                                        </div>
                                    ) : null
                                )}
                            </div>
                        </CSSTransition>
                    </div>
                </div>
            </OutsideClickHandler>
        </div>
    );
}

export default ChangeLang;
