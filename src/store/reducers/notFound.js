import {createReducer} from "@reduxjs/toolkit";
import {getHomeSliderDataRequest} from "../actions/notFound";

const initialState = {
    images: [],
}

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getHomeSliderDataRequest.fulfilled, (state, action) => {
            const {slider: {images}} = action.payload;

            state.images = images;
        })
})

export default reducer;
