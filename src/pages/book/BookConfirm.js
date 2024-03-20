import React, {useCallback, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import {ReactComponent as GoBackIcon} from '../../assets/icons/homeSlider/chevronLeft.svg';
import Wrapper from '../../components/Wrapper';
import PreviewConfirmDate from '../../components/book/confirm/PreviewConfirmDate';
import PreviewConfirmVisitorsCount from '../../components/book/confirm/PreviewConfirmVisitorsCount';
import PreviewConfirmPrice from '../../components/book/confirm/PreviewConfirmPrice';
import {createPayment} from "../../store/actions/book/book";

function BookConfirm() {
    const {t} = useTranslation();
    const navigate = useNavigate()
    const {cardNumber, cardholderName, email, tokenId} = useSelector(state => state.book.bookInfo)
    const percent = useSelector(state => state.book.percent)
    const currency = useSelector(state => state.book.currency)
    const visitorsCount = useSelector(state => state.book.visitorsCount)
    const bookDate = useSelector(state => state.book.bookDate)

    const dispatch = useDispatch()

    useEffect(() => {
        if (!tokenId) {
            navigate("/")
        }

    }, [tokenId]);

    const handleBooking = useCallback(async () => {
        const {payload} = await dispatch(createPayment({
            tokenId,
            guestNumber: visitorsCount,
            percent: percent,
            currency,
            fullName: cardholderName,
            email,
            date: bookDate
        }))
        if (payload.status === "ok") {
            alert("exav")
        } else {
           alert("chexav")
        }



    }, [cardNumber, cardholderName, email, percent, currency, visitorsCount, bookDate, tokenId]);

    return (
        <Wrapper>
            <section className="book__confirm_section">
                <div className="container">
                    <Link className="go__back_link" to="/book">
                        <GoBackIcon/>
                    </Link>
                    <div className="title__box">
                        <h1>{t('Confirm and Pay')}</h1>
                    </div>

                    <div className="confirm__info_container">
                        <div className="reserving__data">
                            <PreviewConfirmDate date={bookDate}/>
                            <PreviewConfirmVisitorsCount count={visitorsCount}/>
                            <PreviewConfirmPrice currency={currency} percent={percent} visitors={visitorsCount}/>
                        </div>
                        <div className="user__data">
                            <div>
                                <p>{t('Card Number')}</p>
                                <input placeholder={cardNumber.replace(/^(\d{4}\s*){3}/, '**** **** **** ')} disabled
                                       type="text"/>
                            </div>
                            <div>
                                <p>{t('E-mail')}</p>
                                <input placeholder={email} disabled type="text"/>
                            </div>
                        </div>
                        <div>
                            <button onClick={handleBooking} className="confirm__btn">
                                {t('Confirm and Pay')}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </Wrapper>
    );
}

export default BookConfirm;
