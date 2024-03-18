import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../Api";

export const getHomeSliderDataRequest = createAsyncThunk("notFound/get-home-slider-data-request", async (payload, thunkAPI) => {
    try {
        const {data} = await Api.getHomeSliderData();

        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.response.data)
    }
});
