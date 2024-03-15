import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../../Api";

// eslint-disable-next-line no-unused-vars
export const getHomeLastBlockDataRequest = createAsyncThunk("home/get-home-lastSection-data", async (_, thunkAPI) => {
    try {
        const {data} = await Api.getHomeLastBlockData()

        return data
    } catch (e) {
        console.log(e)
        return e
    }
})
