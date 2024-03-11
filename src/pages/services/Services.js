import React, {useCallback, useEffect} from 'react';
import Wrapper from "../../components/Wrapper";
import {useTranslation} from "react-i18next";
import ServicesCard from '../../components/services/ServicesCard';
import {useDispatch, useSelector} from "react-redux";
import {getServicesDataRequest} from "../../store/actions/services/services";
import {useNavigate} from "react-router-dom";
import {clearWorkersData} from "../../store/actions/services/workers";

function Services() {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {services} = useSelector(state => state.services);

    useEffect(() => {
        dispatch(getServicesDataRequest());
        dispatch(clearWorkersData());
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
                        <section className='serviceMain'>
                            {
                                services.map((s) => (
                                    <ServicesCard onClick={handleNavigateToItem} key={s.id} el={s}/>
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
