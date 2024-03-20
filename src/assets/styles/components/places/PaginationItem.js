import React, {useCallback} from 'react';
import PropTypes from "prop-types";

function PaginationItem(props) {
    const {actualPage, page, setPage} = props

    const handleSetPage = useCallback(() => {

        if (actualPage === page) return
        setPage(page)

    }, [actualPage, page, setPage])
    return (
        <div className={`pagination__item ${actualPage === page ? "active" : ""}`} onClick={() => {
            handleSetPage()
        }}>
            <p>{page}</p>
        </div>
    );
}

export default PaginationItem;

PaginationItem.propTypes = {
    actualPage: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    setPage: PropTypes.func.isRequired
}
