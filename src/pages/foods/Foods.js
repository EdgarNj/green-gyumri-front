import React, {useEffect, useState} from 'react';
import Wrapper from "../../components/Wrapper";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {clearFoodsData, getFoodsDataRequest} from "../../store/actions/foods/foods";
import Carousel from "nuka-carousel";
import {ReactComponent as Left} from '../../assets/icons/foods/left.svg';
import {ReactComponent as Right} from '../../assets/icons/foods/right.svg';
import {getCompositionsDataRequest} from "../../store/actions/foods/compositions";
import Compositions from "../../components/foods/Compositions";
import FoodCard from "../../components/foods/FoodCard";
import Calculate from "../../components/foods/Calculate";
import {useMediaQuery} from "usehooks-ts";


function Foods() {
    const minWidth1401 = useMediaQuery('(min-width: 1401px)');
    const maxWidth1400 = useMediaQuery('(max-width: 1400px)');
    const maxWidth767 = useMediaQuery('(max-width: 767px)');
    const maxWidth565 = useMediaQuery('(max-width: 565px)');

    const dispatch = useDispatch();
    const {t} = useTranslation();

    const {foods, totalPages} = useSelector(state => state.foods);
    const {compositions} = useSelector(state => state.compositions);
    const visitorsNumber = useSelector(state => state.book.visitorsCount)

    const [title, setTitle] = useState('');
    const [slideIndex, setSlideIndex] = useState(1);
    const [value, setValue] = useState(0);
    const [show, setShow] = useState(false);
    const [page, setPage] = useState(1);
    const [slidesToShow, setSlidesToShow] = useState(2.7);

    const options = {
        cellAlign: 'center',
        slideIndex: slideIndex,
        beforeSlide: (startIndex, endIndex) => {
            setSlideIndex(endIndex);
            setShow(false);
        },
        slidesToShow: slidesToShow,
        cellSpacing: 15,
        defaultControlsConfig: {
            pagingDotsStyle: {display: 'none'},
            prevButtonClassName: "prev",
            nextButtonClassName: "next",
            prevButtonText: <Left/>,
            nextButtonText: <Right/>
        },
    }

    useEffect(() => {
        dispatch(getFoodsDataRequest({page}));

        return () => {
            dispatch(clearFoodsData())
        }
    }, [page]);

    useEffect(() => {
        if (foods.length) {
            const food = foods[slideIndex];

            setTitle(food.name);
            dispatch(getCompositionsDataRequest({id: food.id}));
        }

        if (slideIndex + 4 >= foods.length && totalPages > page) {
            setPage(page + 1)
        }
    }, [foods, slideIndex, totalPages]);

    useEffect(() => {
        if (maxWidth1400) {
            setSlidesToShow(1.9);
        }

        if (minWidth1401) {
            setSlidesToShow(2.7);
        }

        if (maxWidth767) {
            setSlidesToShow(1.4);
        }

        if (maxWidth565) {
            setSlidesToShow(1);
        }
    }, [maxWidth1400, minWidth1401, maxWidth565]);

    return (
        <Wrapper>
            <div id='food'>
                <h1>{t('Recipes')}</h1>
                <section className='foodContent'>
                    <Carousel {...options} >
                        {
                            foods.map((f, i) => (
                                <FoodCard key={f.id}
                                          show={show}
                                          slideIndex={slideIndex}
                                          index={i}
                                          food={f}
                                          change={setShow}/>
                            ))
                        }
                    </Carousel>
                    <h2 className='title'>{title}</h2>
                    {
                        compositions.length ?
                            <div className="bottom_block">
                                {
                                    show &&
                                    <Calculate
                                        value={+value}
                                        change={setValue}
                                    />
                                }
                                <Compositions data={compositions} percent={+value} visitorsNumber={visitorsNumber}/>
                            </div>
                            : null
                    }
                </section>
            </div>
        </Wrapper>
    );
}

export default Foods;
