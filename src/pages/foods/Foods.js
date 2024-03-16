import React, {useEffect, useState} from 'react';
import Wrapper from "../../components/Wrapper";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {getFoodsDataRequest} from "../../store/actions/foods/foods";
import Carousel from "nuka-carousel";
import {ReactComponent as Left} from '../../assets/icons/foods/left.svg';
import {ReactComponent as Right} from '../../assets/icons/foods/right.svg';
import {getCompositionsDataRequest} from "../../store/actions/foods/compositions";
import Compositions from "../../components/foods/Compositions";
import FoodCard from "../../components/foods/FoodCard";
import Calculate from "../../components/foods/Calculate";


function Foods() {
    const dispatch = useDispatch();
    const {t} = useTranslation();
    const {foods, totalPages} = useSelector(state => state.foods);
    const {compositions} = useSelector(state => state.compositions);

    const [title, setTitle] = useState('');
    const [slideIndex, setSlideIndex] = useState(1);
    const [value, setValue] = useState(0);
    const [visitorsNumber, setVisitorsNumber] = useState(0);
    const [show, setShow] = useState(false);
    const [page, setPage] = useState(1);

    const options = {
        cellAlign: 'center',
        slideIndex: slideIndex,
        afterSlide: (currentIndex) => {
            setSlideIndex(currentIndex);
            setShow(false)
        },
        cellSpacing: 20,
        slidesToShow: 3,
        defaultControlsConfig: {
            pagingDotsStyle: {display: 'none'},
            prevButtonClassName: "prev",
            nextButtonClassName: "next",
            prevButtonText: <Left/>,
            nextButtonText: <Right/>
        },
    }

    useEffect(() => {
        dispatch(getFoodsDataRequest({page}))
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

    return (
        <Wrapper>
            <div id='food'>
                <h1>{t('Recipes')}</h1>
                <section className='foodContent'>
                    <Carousel {...options}>
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
                                        changeVisitors={setVisitorsNumber}
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
