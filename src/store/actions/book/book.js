import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../../Api";


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
        const { tokenId, guestNumber, percent, currency, fullName, email, date } = arg

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
            const { loadStripe } = await import('@stripe/stripe-js');
            const stripePromise = loadStripe('pk_test_51OeZe7GYKkovkPnaIYrvEwM8uXXVlsyDwpTk7ePURp2mLzAqvf4duCfFU8Zx0HW1M6zM6gGSD1EHyYqn9FL4r3UW00mNogjGou');
            const newStripe = await stripePromise;


            const timeoutPromise = new Promise((resolve, reject) => {
                setTimeout(async () => {
                    reject(new Error({ status: "timeout" }));

                }, 5000);
            });

            const paymentPromise = newStripe.confirmCardPayment(clientSecret, {
                payment_method: paymentMethod
            });
            const result = await Promise.race([paymentPromise, timeoutPromise]);

            if (result instanceof Error) {
                throw result; // Throw the timeout error
            }

            if (result.error) {
                throw new Error({ status: "error" });
            } else {
                await Api.checkReservation(id);
                return thunkAPI.fulfillWithValue({ status: "ok" });
            }
        }
        return thunkAPI.fulfillWithValue({ status: "ok" });
    } catch (e) {
        console.log(e);
        return thunkAPI.rejectWithValue({ status: "error" });
    }
});
