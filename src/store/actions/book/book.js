import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../../Api";

// eslint-disable-next-line no-unused-vars
export const getReservedDaysData = createAsyncThunk("book/get-reserved-days", async (arg, thunkAPI) => {
    try {
        const {data} = await Api.getReservedDaysData()
        return data
    } catch (e) {
        console.log(e)
    }
})
// eslint-disable-next-line no-unused-vars
export const getPriceListData = createAsyncThunk("book/get-price-list", async (arg, thunkAPI) => {
    try {
        const {data} = await Api.getPricingData()

        return data
    } catch (e) {
        console.log(e)
    }
})

export const setBookDay = createAction("book/set-day")
export const setVisitorsCount = createAction("book/set-visitors-count")
export const setPercent = createAction("book/set-percent")
export const setCurrency = createAction("book/set-currency")
// eslint-disable-next-line no-unused-vars
export const setFormErrorText = createAsyncThunk("book/set-form-error", (arg, thunkAPI) => {
    try {
        return arg
    } catch (e) {
        console.log(e)
    }
})
