import {createReducer} from "@reduxjs/toolkit";
import {getHomeLastBlockDataRequest} from "../../actions/home/lastBlock";


const initialState = {
    loading: false,
    data: {
        title: "",
        image: {}
    }
}

// eslint-disable-next-line no-unused-vars
const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getHomeLastBlockDataRequest.fulfilled, (state, action) => {
            const {lastBlock} = action.payload
            state.data = lastBlock
        })

})

export default reducer
