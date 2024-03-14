import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../../Api";

export const getHomeNewsDataRequest = createAsyncThunk("home/get-home-newsSection-data", async () => {
    try {
        const {data} = await Api.getHomeNewsData()

        return data
    } catch (e) {
        console.log(e)
    }
})
