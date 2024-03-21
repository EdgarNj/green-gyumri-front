import React, {useEffect} from 'react';
import Wrapper from "../../components/Wrapper";
import statusImg from "../../assets/images/bookStatusBg.jpg"
import {useLocation, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";


function BookStatus() {
    const location = useLocation();
    const navigate = useNavigate()
    const {t} = useTranslation()
    let status = location?.state?.status;

    useEffect(() => {
        if (!status) {
            navigate("/")
        }
    }, []);
    const statusList = {
        success: "Your book is confirmed!",
        declined: "Payment for book unsuccessful"
    }

    return (
        <Wrapper>
            <section className="book__status_box">
                <div className="container">
                    <div className="title__box">
                        <h2>{t(statusList[status])}</h2>
                    </div>
                </div>
                <div className="image__box">
                    <img src={statusImg} alt=""/>
                </div>
            </section>
        </Wrapper>
    );
}

export default BookStatus;
