import {createReducer} from "@reduxjs/toolkit";
import {clearWorkersData, getWorkersDataRequest} from "../../actions/services/workers"    ;

const initialState = {
    workers: [],
    title: '',
    totalPages: 0,
    total: 0
}

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getWorkersDataRequest.fulfilled, (state, action) => {
            const {workers, serviceTitle, totalPages, total} = action.payload;
            state.workers.push(...workers);
            state.title = serviceTitle;
            state.totalPages = totalPages;
            state.total = total;
        })
        .addCase(clearWorkersData,(state) => {
            if (state.workers.length){
                state.workers = []
            }
            state.title = '';
        })
})

export default reducer;
