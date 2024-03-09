import {createReducer} from "@reduxjs/toolkit";
import {getServicesDataRequest, getWorkersDataRequest} from "../actions/services";

const initialState = {
    services: [],
    workers: [],
    title: '',
}

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getServicesDataRequest.fulfilled, (state, action) => {
            const {services} = action.payload;
            state.services = services;
        })
        .addCase(getWorkersDataRequest.fulfilled, (state, action) => {
            const {workers,serviceTitle} = action.payload;
            state.workers = workers;
            state.title = serviceTitle;
        })
})

export default reducer;
