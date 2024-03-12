import {createReducer} from "@reduxjs/toolkit";
import {getWeblinksDataRequest} from "../../actions/footer/links";

const initialState = {
    weblinks: []
}

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getWeblinksDataRequest.fulfilled, (state, action) => {
            const {webLinks} = action.payload;

            state.weblinks = webLinks;
        })
})

export default reducer;
