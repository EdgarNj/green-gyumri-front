import React from 'react';
import {useTranslation} from "react-i18next";
import PropTypes from "prop-types";

function BookButton(props) {
    const {onClick} = props
    const {t} = useTranslation()
    return (
        <button onClick={() => {
            onClick()
        }} className="book_button">
            {t("Book")}
        </button>
    );
}

export default BookButton;

BookButton.propTypes = {
    onClick: PropTypes.func.isRequired
}
