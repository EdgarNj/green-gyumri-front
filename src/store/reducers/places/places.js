import {createReducer} from "@reduxjs/toolkit";
import {getPlacesDataRequest, getSinglePlaceDataRequest} from "../../actions/places/places";

const initialState = {
    places: [],
    totalPages: 0,
    page: 0,
    singlePlace: {
        image: {},
        title: "",
        description: "",
        lat: "",
        lng: ""
    }
}

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getPlacesDataRequest.fulfilled, (state, action) => {
            const {places, totalPages, page} = action.payload;
            state.places = places;
            state.totalPages = totalPages;
            state.page = page;
        })
        .addCase(getSinglePlaceDataRequest.pending, (state) => {
            state.singlePlace = {
                image: {},
                title: "",
                description: "",
                lat: "",
                lng: ""
            }
        })
        .addCase(getSinglePlaceDataRequest.fulfilled, (state, action) => {
            const {place} = action.payload
            state.singlePlace = place
        })
})

export default reducer;
