import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getHomeProvidesDataRequest} from "../../../store/actions/home/weProvide";
import ProvidesCard from "./ProvidesCard";
import {useTranslation} from "react-i18next";


function ProvidesSection() {
    const {t} = useTranslation()
    const dispatch = useDispatch()
    const data = useSelector(state => state.weProvide.data)

    useEffect(() => {
        dispatch(getHomeProvidesDataRequest())
    }, []);
    return (
        <section className="provides__section">
            <div className="container">
                <h1 className="title">{t("We provide:")}</h1>
                <article className="provides__box">
                    {data.map(provide => (
                        <ProvidesCard key={provide.id} datum={provide}/>
                    ))}
                </article>
            </div>
        </section>

    );
}

export default ProvidesSection;
