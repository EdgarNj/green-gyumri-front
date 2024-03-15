import React, {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import Carousel from "nuka-carousel";
import {useDispatch, useSelector} from "react-redux";
import {getHomeNewsDataRequest} from "../../../store/actions/home/news";
import NewsItemCard from "./NewsItemCard";
import {useMediaQuery} from "usehooks-ts";
import {ReactComponent as LeftButton} from "../../../assets/icons/newsSlider/chevronLeft.svg";
import {ReactComponent as RightButton} from "../../../assets/icons/newsSlider/chevronRight.svg";

function NewsSection() {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const data = useSelector(state => state.news.data);

    const px1000 = useMediaQuery("(max-width: 1000px)");
    const px800 = useMediaQuery("(max-width: 800px)");

    // eslint-disable-next-line no-unused-vars
    const [slideCount, setSlideCount] = useState(3);

    useEffect(() => {
        dispatch(getHomeNewsDataRequest());
    }, []);

    useEffect(() => {
        if (px800) {
            setSlideCount(1);
        } else if (px1000) {
            setSlideCount(2);
        } else {
            setSlideCount(3);
        }
    }, [px1000, px800]);


    return (
        <section className="news__sections">
            <div className="container">
                <h1 className="title">{t("Our news")}</h1>
                <div className="slider__container">
                    <Carousel
                        wrapAround={true}
                        renderBottomCenterControls={null}
                        renderCenterRightControls={({nextSlide}) => (
                            <button className="control__btn" onClick={nextSlide}>
                                <RightButton/>
                            </button>
                        )}
                        renderCenterLeftControls={({previousSlide}) => (
                            <button className="control__btn" onClick={previousSlide}>
                                <LeftButton/>
                            </button>
                        )}
                        slidesToShow={slideCount}
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
