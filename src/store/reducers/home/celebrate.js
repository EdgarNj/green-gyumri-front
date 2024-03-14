import {createReducer} from "@reduxjs/toolkit";
import {getHomeCelebrateDataRequest} from "../../actions/home/celebrate";

const initialState = {
    loading: false,
    data: [],
    page: 1,
    totalPages: 1
}


const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getHomeCelebrateDataRequest.fulfilled, (state, action) => {
            const {celebrates, page, totalPages} = action.payload

            state.totalPages = totalPages
            state.page = page
            state.data = [...state.data, ...celebrates]
        })


})

export default reducer
