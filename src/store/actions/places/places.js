import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../../Api";

export const getPlacesDataRequest = createAsyncThunk("places/get-places-data", async (arg, thunkAPI) => {
    try {
        const {page} = arg

        const {data} = await Api.getPlacesData(page)

        return thunkAPI.fulfillWithValue(data)
    } catch (e) {
        return thunkAPI.rejectWithValue({})

    }
})
