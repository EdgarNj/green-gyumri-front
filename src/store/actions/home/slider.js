import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../../Api";
import {getReservedDaysData} from "../book/book";

// eslint-disable-next-line no-unused-vars
export const getHomeSliderDataRequest = createAsyncThunk("home/get-home-homeSlider-data", async (_, thunkAPI) => {
    try {
        const {data} = await Api.getHomeSliderData()
        await thunkAPI.dispatch(getReservedDaysData())
        return data
    } catch (e) {
        console.log(e)
    }
})
