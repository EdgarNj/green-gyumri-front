import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import {useDispatch, useSelector} from "react-redux";
import {getWorkersDataRequest} from "../../store/actions/services/workers";
import WorkersCard from "../../components/services/WorkersCard";
import Carousel from "nuka-carousel";
import {useMediaQuery} from "usehooks-ts";

function Workers() {
    const maxWidth992 = useMediaQuery('(max-width: 992px)');
    const minWidth993 = useMediaQuery('(min-width: 993px)');
    const maxWidth565 = useMediaQuery('(max-width: 565px)');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();
    const {workers, title, totalPages} = useSelector(state => state.workers);

    const [page, setPage] = useState(1);
    const [slidesToShow, setSlidesToShow] = useState(3);
    const [cellAlign, setCellAlign] = useState('center');

    useEffect(() => {
        if (maxWidth992) {
            setSlidesToShow(2);
            setCellAlign('null');
        }

        if (minWidth993) {
            setSlidesToShow(3);
            setCellAlign('center');
        }

        if (maxWidth565) {
            setSlidesToShow(1);
        }
    }, [maxWidth992, maxWidth565, minWidth993]);

    useEffect(() => {
        (async () => {
            const {payload} = await dispatch(getWorkersDataRequest({id, page}));

            if (payload.status !== 'ok') {
                navigate('/')
            }
        })()


    }, [id, page]);

    const handleChangePage = useCallback(() => {
        if (page !== totalPages) {
            setPage(page + 1);
        }
    }, [page, totalPages])

    const handleGoBack = useCallback(() => {
        navigate('/services');
    }, []);

    return (
        <Wrapper>
            <div id='services'>
                <div className='container'>
                    <div className='serviceBlock'>
                        <span className='arrow' onClick={() => handleGoBack()}> &#8249; </span>
                        <h1>{title}</h1>
                        <section className='serviceMain'>
                            {
                                workers.length > 0 && (
                                    <Carousel speed={200}
                                              cellAlign={cellAlign}
                                              slideIndex={1}
                                              beforeSlide={(currentIndex, nextIndex) => {
                                                  nextIndex >= workers.length - 4 ? handleChangePage() : null;
                                              }}
                                              slidesToShow={slidesToShow}
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
