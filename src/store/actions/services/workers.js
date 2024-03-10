import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../../Api";

export const getWorkersDataRequest = createAsyncThunk("workers/get-workers-data-request", async (payload,thunkAPI) => {
    try {
        const {data} = await Api.getWorkersData({...payload});

        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.response.data)
    }
})
export const clearWorkersData = createAction('workers/clear-workers-data');
