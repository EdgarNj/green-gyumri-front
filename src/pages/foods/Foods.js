import React, {useCallback, useEffect, useState} from 'react';
import Wrapper from "../../components/Wrapper";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {getFoodsDataRequest} from "../../store/actions/foods/foods";
import Carousel from "nuka-carousel";
import {ReactComponent as Left} from '../../assets/icons/foods/left.svg';
import {ReactComponent as Right} from '../../assets/icons/foods/right.svg';
import {getCompositionsDataRequest} from "../../store/actions/foods/compositions";
import Compositions from "../../components/foods/Compositions";
import Visitors from "../../components/home/sliderSection/Visitors";


function Foods() {
    const dispatch = useDispatch();
    const {t} = useTranslation();

    const {foods} = useSelector(state => state.foods);
    const {compositions} = useSelector(state => state.compositions);

    const [title, setTitle] = useState('');
    const [slideIndex, setSlideIndex] = useState(0);
    const [value, setValue] = useState(0);

    const options = {
        cellAlign: 'center',
        slideIndex: 0,
        afterSlide: (currentIndex) => setSlideIndex(currentIndex),
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
        dispatch(getFoodsDataRequest())
    }, []);

    useEffect(() => {
        if (foods.length) {
            const food = foods[slideIndex];

            setTitle(food.name);
            dispatch(getCompositionsDataRequest({id: food.id}));
        }
    }, [foods, slideIndex]);

    const handleChangeValue = useCallback((val) => {
        setValue(val)
    }, [])

    return (
        <Wrapper>
            <div id='food'>
                <div className="container">
                    <h1>{t('Recipes')}</h1>
                    <section className='foodContent'>
                        <Carousel {...options}>
                            {
                                foods.map(f => (
                                    <figure key={f.id} className="imgBlock">
                                        <img src={f.image.path} alt={f.name}/>
                                    </figure>
                                ))
                            }
                        </Carousel>
                        <h2 className='title'>{title}</h2>
                        {compositions.length ?
                            <div className="bottom_block">
                                <Visitors changeVisitors={() => {
                                }}/>
                                <label className='range_title'>
                                    <input
                                        value={value}
                                        type="range"
                                        min={0}
                                        max={40}
                                        step={20}
                                        onChange={(e) => setValue(e.target.value)}
                                    />
                                    <span onClick={() => {
                                        handleChangeValue(0)
                                    }}>min</span>
                                    <span onClick={() => {
                                        handleChangeValue(20)
                                    }}>mid</span>
                                    <span onClick={() => {
                                        handleChangeValue(40)
                                    }}>max</span>
                                </label>
                                <Compositions data={compositions}/>
                            </div>
                            : null}
                    </section>
                </div>
            </div>
        </Wrapper>
    );
}

export default Foods;
