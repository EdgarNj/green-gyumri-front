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

export const getWorkersDataRequest = createAsyncThunk("services/get-workers-data-request", async (payload) => {
    try {
        const {id} = payload;

        const {data} = await Api.getWorkersData(id);

        return data;
    } catch (e) {
        console.log(e)
    }
})
