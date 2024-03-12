import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../../Api";

export const getHomeProvidesDataRequest = createAsyncThunk("home/get-home-providesSection-data", async () => {
    try {
        const {data} = await Api.getHomeProvidesData()

        return data
    } catch (e) {
        console.log(e)
    }
})
