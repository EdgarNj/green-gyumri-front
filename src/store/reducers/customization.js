import {createReducer} from "@reduxjs/toolkit";
import {changeLanguage, changeMode} from "../actions/customization";

const initialState = {
    lang: localStorage.getItem("lang") || "hy",
    mode: localStorage.getItem("mode") || "light"
}


const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(changeLanguage, (state, action) => {
        const {lang} = action.payload
            localStorage.setItem("lang",lang)

          state.lang = lang
    })
        .addCase(changeMode, (state, action) => {
        const {mode} = action.payload
            localStorage.setItem("mode",mode)
          state.mode = mode
    })

})

export default reducer
