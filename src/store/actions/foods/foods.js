import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../../Api";

export const getFoodsDataRequest = createAsyncThunk("foods/get-foods-data-request", async (payload,thunkAPI) => {
    try {
        const {data} = await Api.getFoodsData();
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.response.data)
    }
})
