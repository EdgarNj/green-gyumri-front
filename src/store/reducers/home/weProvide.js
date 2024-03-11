import {createReducer} from "@reduxjs/toolkit";
import {getHomeProvidesDataRequest} from "../../actions/home/weProvide";


const initialState = {
    loading: false,
    data: []
}


const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getHomeProvidesDataRequest.fulfilled, (state, action) => {
            const {provides} = action.payload
            state.data = provides
        })

})

export default reducer
