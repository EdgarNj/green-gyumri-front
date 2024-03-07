import {createReducer} from "@reduxjs/toolkit";
import {getHomeSliderDataRequest} from "../actions/home";

const initialState = {
    sliderData: {
        title: '',
        images:[]
    }
}

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getHomeSliderDataRequest.fulfilled, (state, action) => {
            const {slider} = action.payload
            state.sliderData = slider
        })
})

export default reducer
