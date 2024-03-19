import React, {useCallback} from 'react';
import {useNavigate} from "react-router-dom";

function GreenGyumriLogo() {
    const navigate = useNavigate()


    const handleNavigate = useCallback(() => {
        navigate("/")
    }, [])
    return (
        <div onClick={() => handleNavigate()} className="logo">
            <p className="firstLetter">G</p>
            <div>
                <p className="secondLetter">reen</p>
                <p className="thirdLetter">yumri</p>
            </div>

        </div>
    );
}

export default GreenGyumriLogo;
