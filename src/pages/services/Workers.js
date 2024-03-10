import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import {useDispatch, useSelector} from "react-redux";
import {clearWorkersData, getWorkersDataRequest} from "../../store/actions/services/workers";
import WorkersCard from "../../components/services/WorkersCard";
import Carousel from "nuka-carousel";

function Workers() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();
    const {workers, title, totalPages} = useSelector(state => state.workers);
    const [page, setPage] = useState(1);
    const limit = 10;

    useEffect(() => {
        dispatch(getWorkersDataRequest({id, limit, page}));
    }, [id, page]);

    const handleChangePage = useCallback(() => {
        if (page !== totalPages) {
            setPage(page + 1);
        }
    }, [page, totalPages])

    const handleGoBack = useCallback(() => {
        dispatch(clearWorkersData())
        navigate('/services');
    }, [])

    return (
        <Wrapper>
            <div id='services'>
                <div className='container'>
                    <div className='serviceBlock'>
                        <span className='arrow' onClick={() => handleGoBack()}> &#8249; </span>
                        <h1>{title}</h1>
                        <section>
                            {
                                workers.length > 0 && (
                                    <Carousel
                                        animation='zoom'
                                        cellAlign='center'
                                        slideIndex={1}
                                        beforeSlide={(currentIndex, nextIndex) => {
                                            nextIndex >= workers.length - 4 ? handleChangePage() : null;
                                        }}
                                        slidesToShow={3}
                                        defaultControlsConfig={{
                                            prevButtonClassName: 'noneBtn',
                                            nextButtonClassName: 'noneBtn',
                                            pagingDotsStyle: {display: 'none'},
                                        }}>
                                        {workers.map(el => (
                                            <WorkersCard key={el.id} el={el}/>
                                        ))}
                                    </Carousel>
                                )
                            }
                        </section>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Workers;


