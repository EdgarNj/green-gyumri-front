import {createReducer} from "@reduxjs/toolkit";
import {getServicesDataRequest} from "../../actions/services/services";

const initialState = {
    services: [],
}

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getServicesDataRequest.fulfilled, (state, action) => {
            const {services} = action.payload;
            state.services = services;
        })
})

export default reducer;
