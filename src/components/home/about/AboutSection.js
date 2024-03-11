import React, {useEffect} from 'react';
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {getHomeAboutDataRequest} from "../../../store/actions/home/about";

function AboutSection() {
    const dispatch = useDispatch()
    // eslint-disable-next-line no-unused-vars
    const {firstParagraph, secondParagraph, images} = useSelector(state => state.homeAbout.data)
    useEffect(() => {
        dispatch(getHomeAboutDataRequest())
    }, []);
    const {t} = useTranslation()
    return (
        <section className="about__box">
            <div className="container">
                <div className="container">

                    <article className="title__box">
                        <h1>{t("About us")}</h1>
                        <p>{firstParagraph}</p>
                        <p>{secondParagraph}</p>
                    </article>


                    <article className="figure__box">
                        {images.map(datum => (
                            <figure key={datum.id}>
                                <img src={datum.path} alt={firstParagraph}/>
                            </figure>
                        ))}

                    </article>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
