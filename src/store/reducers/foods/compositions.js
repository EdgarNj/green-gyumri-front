import {createReducer} from "@reduxjs/toolkit";
import {getCompositionsDataRequest} from "../../actions/foods/compositions";

const initialState = {
    compositions: [],
}

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getCompositionsDataRequest.fulfilled, (state, action) => {
            const {compositions} = action.payload;

            state.compositions = compositions;
        })
})

export default reducer;
