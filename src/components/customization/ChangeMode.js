import React, {useCallback} from 'react';
import {ReactComponent as Dark} from "../../assets/icons/customization/changeMode/dark.svg";
import {ReactComponent as Light} from "../../assets/icons/customization/changeMode/light.svg";
import {useDispatch, useSelector} from "react-redux";
import {changeMode} from "../../store/actions/customization";

function ChangeMode() {
    const dispatch = useDispatch()
    const mode = useSelector(state => state.customization.mode)

    const handleChangeMode = useCallback(() => {
        const newMode  = mode === 'light' ? 'dark' : 'light'
        dispatch(changeMode({mode:newMode}))

    }, [mode])

    return (
        <div onClick={()=>{{handleChangeMode()}}}
             className={`mode ${mode === "dark" ? "dark" : ""}`}>
            <div className="button__container">
                <Dark className='sun'/>
                <Light className='moon'/>
            </div>
        </div>
    );
}

export default ChangeMode;
