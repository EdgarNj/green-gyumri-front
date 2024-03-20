import {createReducer} from "@reduxjs/toolkit";
import {getPlacesDataRequest} from "../../actions/places/places";

const initialState = {
    places: [],
    totalPages: 0,
    page: 0
}

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getPlacesDataRequest.fulfilled, (state, action) => {
            const {places, totalPages, page} = action.payload;
            state.places = places;
            state.totalPages = totalPages;
            state.page = page;
        })
})

export default reducer;
