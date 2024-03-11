import {createReducer} from "@reduxjs/toolkit";
import {getHomeAboutDataRequest} from "../../actions/home/about";


const initialState = {
    loading: false,
    data: {
        id: 1,
        firstParagraph: "",
        secondParagraph: "",
        images: [],
    }
}

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getHomeAboutDataRequest.fulfilled, (state, action) => {
            const {about} = action.payload

            state.data = about
        })


})

export default reducer
