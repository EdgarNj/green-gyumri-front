import {createReducer} from "@reduxjs/toolkit";
import {getHomeNewsDataRequest} from "../../actions/home/news";


const initialState = {
    loading: false,
    data: []
}

// eslint-disable-next-line no-unused-vars
const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getHomeNewsDataRequest.fulfilled, (state, action) => {
            const {news} = action.payload
            state.data = news
        })

})

export default reducer
