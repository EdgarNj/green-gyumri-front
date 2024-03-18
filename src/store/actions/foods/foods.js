import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../../Api";

export const getFoodsDataRequest = createAsyncThunk("foods/get-foods-data-request", async (payload,thunkAPI) => {
    try {
        const {page} = payload;

        const {data} = await Api.getFoodsData(page);
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.response.data)
    }
});

export const clearFoodsData = createAction('workers/clear-foods-data');
