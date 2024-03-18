import React, {useEffect} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Input from "./Input";
import {useTranslation} from "react-i18next";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";

const initialValues = {
    cardNumber: '',
    cvv: '',
    expiration: '',
    cardholderName: '',
    email: '',
};


function CardForm(props) {
    const {onSubmit} = props
    const formError = useSelector(state => state.book.formError)
    const {t} = useTranslation();

    const validationSchema = Yup.object().shape({
        cardNumber: Yup.string().trim().required(t('Required')).matches(/^\d{4} \d{4} \d{4} \d{4}$/, t('Invalid card number')),
        cvv: Yup.string().required(t('Required')).matches(/^\d{3,4}$/, t('Invalid CVV')),
        expiration: Yup.string().required(t('Required')).matches(/^(0[1-9]|1[0-2])\/\d{2}$/, t('Invalid expiration date (MM/YY)')),
        cardholderName: Yup.string().required(t('Required')),
        email: Yup.string().required(t('Required')).email(t('Invalid email address')),
    });

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: onSubmit,

    });


    useEffect(() => {
        if (formError.cvv) {
            formik.setErrors({cvv: t(formError.cvv)})
        }
        if (formError.cardNumber) {
            formik.setErrors({cardNumber: t(formError.cardNumber)})
        }
        if (formError.expiryDate) {
            formik.setErrors({expiration: t(formError.expiryDate)})
        }
    }, [formError]);
    const handleCardNumberChange = (event) => {
        let {value} = event.target;


        const newValue = value.replace(/\D/g, '');


        const truncatedValue = newValue.slice(0, 16);

        const formattedValue = truncatedValue.replace(/(\d{4})/g, '$1 ').trim();

        formik.setFieldValue('cardNumber', formattedValue);
    };

    const handleExpirationChange = (event) => {
        let {value} = event.target;

        const newValue = value.replace(/\D/g, '');

        const truncatedValue = newValue.slice(0, 4);

        const month = truncatedValue.slice(0, 2);
        const validMonth = parseInt(month, 10) <= 12 ? month : '';
        const year = truncatedValue.slice(2);

        const formattedValue = `${validMonth}${year ? `/${year}` : ''}`;
        formik.setFieldValue('expiration', formattedValue);
    };

    const handleCVVChange = (event) => {
        let {value} = event.target;
        const newValue = value.replace(/\D/g, '');
        const truncatedValue = newValue.slice(0, 4);
        formik.setFieldValue('cvv', truncatedValue);
    };


    return (
        <form className="card__form_box" onSubmit={formik.handleSubmit}>

            <Input
                type="text"
                name="cardNumber"
                placeholder={t("Card Number")}
                onChange={handleCardNumberChange}
                onBlur={formik.handleBlur}
                value={formik.values.cardNumber}
                error={formik.touched.cardNumber && formik.errors.cardNumber ? formik.errors.cardNumber : null}
            />
            <Input
                type="text"
                name="expiration"
                className="expiration__input"
                placeholder={t("Expiration (MM/YY):")}
                onChange={handleExpirationChange}
                onBlur={formik.handleBlur}
                value={formik.values.expiration}
                error={formik.touched.expiration && formik.errors.expiration ? formik.errors.expiration : null}
            />
            <Input

                name="cvv"
                placeholder={t("CVV")}
                className="cvv__input"
                type="password"
                onChange={handleCVVChange}
                onBlur={formik.handleBlur}
                value={formik.values.cvv}
                error={formik.touched.cvv && formik.errors.cvv ? formik.errors.cvv : null}
            />

            <Input
                name="cardholderName"
                placeholder={t("Cardholder Name")}
                onChange={(ev) => {
                    ev.target.value = ev.target.value.toUpperCase();
                    formik.handleChange(ev);
                }}
                onBlur={formik.handleBlur}
                value={formik.values.cardholderName}
                error={formik.touched.cardholderName && formik.errors.cardholderName ? formik.errors.cardholderName : null}
            />
            <Input
                type="email"
                name="email"
                placeholder={t("Email")}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                error={formik.touched.email && formik.errors.email ? formik.errors.email : null}
            />
            <button className="send__button" type="submit">{t("Pay now")}</button>
        </form>
    );
}

export default CardForm;

CardForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}
