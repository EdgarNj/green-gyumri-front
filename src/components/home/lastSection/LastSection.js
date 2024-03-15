import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getHomeLastBlockDataRequest} from "../../../store/actions/home/lastBlock";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

function LastSection() {
    const dispatch = useDispatch()
    const {t} = useTranslation()
    const {title, image} = useSelector(state => state.lastBlock.data)
    useEffect(() => {
        dispatch(getHomeLastBlockDataRequest())
    }, [])

    return (
        <section className="last__section">
            <figure className="last__section_figure">
                <img src={image.path} alt={title}/>
            </figure>
            <figcaption className="last__section_figcaption">
                <h3>{title}</h3>
                <Link className="link" to="/book">{t("Book")}</Link>
            </figcaption>
        </section>
    );
}

export default LastSection;
