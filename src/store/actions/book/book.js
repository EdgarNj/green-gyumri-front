import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../../Api";

import {loadStripe} from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_51OeP0WLiImV3YhpMVHvkVmFuSuDh6TgCXy94nso9I0cDgmMWxzEX4MgW1DCHbDPjFTU2o98woVdKizlvNvH8cy5b00NBrf1gwa');
const newStripe = await stripePromise;
export const getReservedDaysData = createAsyncThunk("book/get-reserved-days", async () => {
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

export const setReservationData = createAction("book/set-reservation-data")
// eslint-disable-next-line no-unused-vars
export const setFormErrorText = createAsyncThunk("book/set-form-error", (arg, thunkAPI) => {
    try {
        return arg
    } catch (e) {
        console.log(e)
    }
})


export const createPayment = createAsyncThunk("book/create-payment", async (arg, thunkAPI) => {
    try {
        const {tokenId, guestNumber, percent, currency, fullName, email, date} = arg

        const {
            data: {
                transaction: {
                    clientSecret,
                    paymentMethod,
                    id,
                    status
                },

            }
        } = await Api.createPayment({
            tokenId,
            guestNumber,
            percent,
            currency,
            fullName,
            email,
            date
        })
        if (status !== "succeeded") {
            const data = await newStripe.confirmCardPayment(clientSecret, {
                payment_method: paymentMethod
            });

            await Api.checkReservation(id)
            if (data.error) {
                throw new Error({status: "error"})
            } else {
                return thunkAPI.fulfillWithValue({status: "ok"})
            }
        }
        return thunkAPI.fulfillWithValue({status: "ok"})
    } catch (e) {
        return thunkAPI.rejectWithValue({status: "error"})

    }
})


// (async () => {
//                 console.log(id, "<_-----00-0-")
//                 try {
//
//                     const {data} = await Api.createPayment({
//                         tokenId: id,
//                         guestNumber: visitorsCount,
//                         percent: percent,
//                         currency,
//                         fullName: cardholderName,
//                         email,
//                         date: bookDate
//                     })
//                     console.log(data, "form")
//
//                     const result = await newStripe.confirmCardPayment(data.client_secret, {
//                         payment_method: data.paymentMethodId
//                     });
//
//
//                     console.log(result, "<---- result")
//                 } catch (e) {
//                     console.log(e)
//                 }
//             })()
