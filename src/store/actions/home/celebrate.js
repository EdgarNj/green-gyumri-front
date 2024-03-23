import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../../Api";

// eslint-disable-next-line no-unused-vars
export const getHomeCelebrateDataRequest = createAsyncThunk("home/get-home-celabrate-data", async (arg, thunkAPI) => {
    try {

        const {page} = arg
        const {data} = await Api.getHomeCelebrateData(page)

        return data
    } catch (e) {
        console.log(e)
    }
})
