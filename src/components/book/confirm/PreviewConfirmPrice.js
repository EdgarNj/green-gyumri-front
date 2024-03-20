import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { round } from 'lodash';
import AmdIcon from '../../../assets/icons/book/dram.svg';
import UsdIcon from '../../../assets/icons/book/usd.svg';
import RubIcon from '../../../assets/icons/book/rub.svg';

function PreviewConfirmPrice(props) {
    const { guestPrice, minPrice, minPeople } = useSelector(state => state.book.prices);
    const { t } = useTranslation();
    const [value, setValue] = useState(0);
    const { currency, visitors, percent } = props;

    useEffect(() => {
        let newValue = minPrice[currency];
        const paidPercent = percent / 100;

        if (visitors >= minPeople) {
            const addVisitorsPrice = visitors - minPeople;
            newValue = newValue + addVisitorsPrice * guestPrice[currency];
        }

        newValue = round(newValue * paidPercent);
        setValue(newValue);
    }, []);

    const icon = {
        amd: AmdIcon,
        rub: RubIcon,
        usd: UsdIcon
    };

    return (
        <div className="preview__confirm_price">
            <p className="partial__title">{percent < 100 ? t('Partial payment') : t('Full Payment')}</p>
            <div>
                <img src={icon[currency]} alt="" />
                <p>{value}</p>
            </div>
        </div>
    );
}

PreviewConfirmPrice.propTypes = {
    currency: PropTypes.string.isRequired,
    visitors: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    percent: PropTypes.number.isRequired
};

export default PreviewConfirmPrice;
