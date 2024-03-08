import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../Api";

export const getServicesDataRequest = createAsyncThunk("services/get-services-data-request", async () => {
    try {
        const {data} = await Api.getServicesData();
        return data;
    } catch (e) {
        console.log(e)
    }
})
