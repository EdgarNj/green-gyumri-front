import {createReducer} from "@reduxjs/toolkit";
import {getFoodsDataRequest} from "../../actions/foods/foods";

const initialState = {
    foods: [],
}

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getFoodsDataRequest.fulfilled, (state, action) => {
            const {foods} = action.payload;

            state.foods = foods;
        })
})

export default reducer;
