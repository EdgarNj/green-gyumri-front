import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../../Api";

// eslint-disable-next-line no-unused-vars
export const getHomeSliderDataRequest = createAsyncThunk("home/get-home-homeSlider-data", async (_, thunkAPI) => {
    try {
        const {data} = await Api.getHomeSliderData()
        return data
    } catch (e) {
        console.log(e)
    }
})
