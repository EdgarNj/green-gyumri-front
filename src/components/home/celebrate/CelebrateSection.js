import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getHomeCelebrateDataRequest} from "../../../store/actions/home/celebrate";
import CelebrateBoxPc from "./CelebrateBoxPc";
import {useTranslation} from "react-i18next";
import {useMediaQuery} from "usehooks-ts";
import CelebrateBoxMobile from "./CelebrateBoxMobile";
import InfiniteScroll from 'react-infinite-scroll-component';

function CelebrateSection() {
    const {t} = useTranslation()
    const dispatch = useDispatch()
    const {data, page, totalPages} = useSelector(state => state.celebrate)


    const isMobile = useMediaQuery('(max-width: 700px)')

    useEffect(() => {
        dispatch(getHomeCelebrateDataRequest({page: 1}))
    }, []);


    const fetchMoreData = useCallback(() => {

        if (totalPages > page) {
            dispatch(getHomeCelebrateDataRequest({page: page + 1}));
        }
    }, [page, totalPages])

    return (
        <section className="celebrate__section">
            <div className="container">
                <h1 className="title">{t("Join us to celebrate")}</h1>
                <InfiniteScroll
                    dataLength={data.length}
                    next={fetchMoreData}
                    hasMore={true}
                    endMessage={null}
                    scrollThreshold={0.9}
                    loader={null}>
                    {!isMobile ? data.map((celebrate, i) => (
                        <CelebrateBoxPc isRevers={i % 2 === 0} key={celebrate.id} datum={celebrate}/>
                    )) : (
                        data.map((celebrate, i) => (
                            <CelebrateBoxMobile isRevers={i % 2 === 0} key={celebrate.id} datum={celebrate}/>
                        ))
                    )}
                </InfiniteScroll>
            </div>
        </section>
    );
}

export default CelebrateSection;
