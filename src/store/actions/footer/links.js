import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../../Api";

export const getWeblinksDataRequest = createAsyncThunk("footer/get-weblinks-data-request", async (payload,thunkAPI) => {
    try {
        const {data} = await Api.getWeblinksData();

        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.response.data)
    }
})
