import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../../Api";

export const getHomeAboutDataRequest = createAsyncThunk("home/get-home-aboutSection-data", async () => {
    try {
        const {data} = await Api.getHomeAboutData()

        console.log(data)
        return data
    } catch (e) {
        console.log(e)
    }
})
