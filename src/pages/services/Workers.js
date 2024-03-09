import React, {useCallback, useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import {useDispatch, useSelector} from "react-redux";
import {getWorkersDataRequest} from "../../store/actions/services";
import WorkersCard from "../../components/services/WorkersCard";
import Carousel from "nuka-carousel";

function Workers() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();
    const {workers, title} = useSelector(state => state.services);

    useEffect(() => {
        dispatch(getWorkersDataRequest({id}))
    }, [id]);

    const handleGoBack = useCallback(() => {
        navigate('/services');
    }, [])


    return (
        <Wrapper>
            <div id='services'>
                <div className='container'>
                    <div className='serviceBlock'>
                        <span className='arrow' onClick={() => handleGoBack()}> &#8249; </span>
                        <h1>{title || 'Worker'}</h1>
                        <section>
                            <Carousel slidesToShow={3} defaultControlsConfig={{
                                prevButtonClassName: "noneBtn",
                                nextButtonClassName: "noneBtn",
                                pagingDotsStyle:{display:'none'},
                            }}>
                                {
                                    workers.map(el => (
                                        <WorkersCard key={el.id} el={el}/>
                                    ))
                                }
                            </Carousel>

                        </section>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Workers;


