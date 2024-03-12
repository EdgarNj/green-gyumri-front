import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../../Api";

export const getContactsDataRequest = createAsyncThunk("footer/get-contacts-data-request", async (payload,thunkAPI) => {
    try {
        const {data} = await Api.getContactsData();

        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.response.data)
    }
})
