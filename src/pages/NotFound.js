import React, {useEffect} from 'react';
import Wrapper from "../components/Wrapper";
import {useDispatch, useSelector} from "react-redux";
import {getHomeSliderDataRequest} from "../store/actions/notFound";
import {useTranslation} from "react-i18next";
import {useMediaQuery} from "usehooks-ts";

function NotFound() {
    const {t} = useTranslation();
    const maxWidth992 = useMediaQuery('(max-width: 992px)');

    const dispatch = useDispatch();
    const images = useSelector(state => state.notFound.images);

    useEffect(() => {
        dispatch(getHomeSliderDataRequest());
    }, []);

    return (
        <Wrapper>
            <div id='not_found'>
                {
                    maxWidth992 ? (
                            <>
                                <img className='bg' src={images[0].path} alt="image"/>
                                <div className='layer'></div>
                            </>
                        )
                        :
                        images.map(datum => (
                            <img className='images' key={datum.id} src={datum.path} alt="img"/>
                        ))
                }
                <div className="text_block">
                    <h4 className='title'>404</h4>
                    <p className="text">{t("Page not found")}</p>
                </div>
            </div>
        </Wrapper>
    );
}

export default NotFound;
