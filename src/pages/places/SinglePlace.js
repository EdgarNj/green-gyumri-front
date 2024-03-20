import React, {useState} from 'react';
import Wrapper from "../../components/Wrapper";
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {ReactComponent as Chevron} from "../../assets/icons/homeSlider/chevronLeft.svg";

function SinglePlace() {
    const {id} = useParams()
    const {t} = useTranslation()
    const places = useSelector(state => state.places.places)

    const [placeData] = useState(places.find((data) => data.id === +id))
    console.log(placeData)

    return (
        <Wrapper>
            <section className="single__place_box">
                <div className="container">

                    <div className="title__box">
                        <h1>{t("Must visit places in Gyumri")}</h1>
                        <Link to="/places" className="go__back_link">
                            <Chevron/>
                        </Link>
                    </div>
                    <div className="info__box">
                        <figure className="img__box">
                            <img src={placeData.image.path} alt=""/>
                        </figure>
                        <article className="info__box_container">
                            <div className="text__box">
                                <h3>{placeData.title}</h3>
                                <p>{placeData.description}</p>
                            </div>
                            <div className="map__box">
                                <iframe
                                    className="map"
                                    src={`https://maps.google.com/maps?q=${placeData.lat},${placeData.lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                                />
                            </div>
                        </article>
                    </div>
                </div>

            </section>
        </Wrapper>
    );
}

export default SinglePlace;
