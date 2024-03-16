import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../../Api";

// eslint-disable-next-line no-unused-vars
export const getReservedDaysData = createAsyncThunk("book/get-reserved-days", async (arg, thunkAPI) => {
    try {
        const {data} = await Api.getReservedDaysData()

        console.log(data)
        return data
    } catch (e) {
        console.log(e)
    }
})
