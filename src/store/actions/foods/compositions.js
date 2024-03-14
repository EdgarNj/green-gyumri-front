import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../../Api";

export const getCompositionsDataRequest = createAsyncThunk("foods/get-compositions-data-request", async (payload,thunkAPI) => {
    try {
        const {id} = payload;

        const {data} = await Api.getCompositionsData(id);

        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.response.data)
    }
})
