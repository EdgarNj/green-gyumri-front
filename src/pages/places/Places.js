import React, {useCallback, useEffect} from 'react';
import Wrapper from "../../components/Wrapper";
import {useDispatch, useSelector} from "react-redux";
import {getPlacesDataRequest} from "../../store/actions/places/places";
import PlacesCard from "../../components/places/PlacesCard";
import {useTranslation} from "react-i18next";
import _ from "lodash"
import PaginationItem from "../../assets/styles/components/places/PaginationItem";


function Places() {
    const dispatch = useDispatch();
    const {places, totalPages, page} = useSelector(state => state.places)
    const {t} = useTranslation()


    useEffect(() => {
        dispatch(getPlacesDataRequest({page: 1}))
    }, []);

    const handleChangePage = useCallback((page) => {
        dispatch(getPlacesDataRequest({page}))
    }, [])

    return (
        <Wrapper>
            <section className="places__page">
                <div className="container">
                    <div className="title__box">
                        <h1>{t("Must visit places in Gyumri")}</h1>
                    </div>
                    <div className="items__box">
                        {places.map((datum) => (
                            <PlacesCard key={datum.id} datum={datum}/>
                        ))}
                    </div>
                    <div className="pagination__box">
                        {totalPages !== 1 ? _.range(0, totalPages).map((item, index) => (
                            <PaginationItem key={index}
                                            actualPage={page}
                                            page={index + 1}
                                            setPage={handleChangePage}
                            />
                        )) : null}
                    </div>
                </div>
            </section>
        </Wrapper>
    )
        ;
}

export default Places;
