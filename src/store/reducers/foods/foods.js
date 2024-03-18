import {createReducer} from "@reduxjs/toolkit";
import {getFoodsDataRequest} from "../../actions/foods/foods";

const initialState = {
    foods: [],
    totalPages: 0
}

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getFoodsDataRequest.fulfilled, (state, action) => {
            const {foods, totalPages} = action.payload;
            state.foods.push(...foods);
            state.totalPages = totalPages;
        })
})

export default reducer;
