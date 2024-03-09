import React, {useCallback, useEffect} from 'react';
import Wrapper from "../../components/Wrapper";
import {useTranslation} from "react-i18next";
import ServiceArticle from "../../components/services/ServiceArticle";
import {useDispatch, useSelector} from "react-redux";
import {getServicesDataRequest} from "../../store/actions/services";
import {useNavigate} from "react-router-dom";

function Services() {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {services} = useSelector(state => state.services);

    useEffect(() => {
        dispatch(getServicesDataRequest());
    }, []);

    const handleNavigateToItem = useCallback((id) => {
        navigate(`/services/workers/${id}`);
    }, []);

    return (
        <Wrapper>
            <div id='services'>
                <div className='container'>
                    <div className='serviceBlock'>
                        <h1>{t('Services')}</h1>
                        <section>
                            {
                                services.map((s) => (
                                    <ServiceArticle onClick={handleNavigateToItem} key={s.id} el={s}/>
                                ))
                            }
                        </section>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Services;
