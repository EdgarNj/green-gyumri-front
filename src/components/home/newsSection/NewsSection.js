import React, {useEffect} from 'react';
import {useTranslation} from "react-i18next";
import Carousel from "nuka-carousel";
import {useDispatch, useSelector} from "react-redux";
import {getHomeNewsDataRequest} from "../../../store/actions/home/news";
import NewsItemCard from "./NewsItemCard";

function NewsSection() {
    const {t} = useTranslation()
    const dispatch = useDispatch()
    const data = useSelector(state => state.news.data)

    useEffect(() => {
        dispatch(getHomeNewsDataRequest())
        console.log(data)
    }, [])

    return (
        <section className="news__sections">
            <div className="container">
                <h1 className="title">{t("Our news")}</h1>
                <div className="slider__container">
                    <Carousel
                        slidesToShow={3}
                        cellSpacing={40}
                    >
                        {data.map((news) => (
                            <NewsItemCard key={news.id} datum={news}/>
                        ))}
                    </Carousel>
                </div>

            </div>
        </section>
    );
}

export default NewsSection;
