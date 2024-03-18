import {createReducer} from "@reduxjs/toolkit";
import {
    getPriceListData,
    getReservedDaysData,
    setBookDay,
    setCurrency, setFormErrorText,
    setPercent,
    setVisitorsCount
} from "../../actions/book/book";


const initialState = {
    loading: false,
    reservedDays: [],
    prices: {
        guestPrice: {amd: 0, rub: 0, usd: 0},
        minPrice: {amd: 0, rub: 0, usd: 0},
        minPeople: 0
    },
    bookDate: null,
    visitorsCount: 0,
    percent: 20,
    currency: "amd",
    formError: {
        cvv: "",
        cardNumber: "",
        expiryDate: ""
    }

}


// eslint-disable-next-line no-unused-vars
const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getReservedDaysData.fulfilled, (state, action) => {
            const {transactions} = action.payload
            state.reservedDays = transactions
        })
        .addCase(getPriceListData.fulfilled, (state, action) => {
            const {prices} = action.payload
            state.prices = prices
        })
        .addCase(setBookDay, (state, action) => {
            const {date} = action.payload
            state.bookDate = date
        })
        .addCase(setVisitorsCount, (state, action) => {
            const {count} = action.payload
            state.visitorsCount = count
        })
        .addCase(setPercent, (state, action) => {
            const {percent} = action.payload
            state.percent = percent
        })
        .addCase(setCurrency, (state, action) => {
            const {currency} = action.payload
            state.currency = currency
        })

        .addCase(setFormErrorText.pending, (state) => {
            state.formError = {
                expiryDate: "",
                cardNumber: "",
                cvv: "",
            }
        })
        .addCase(setFormErrorText.fulfilled, (state, action) => {
            const {code, message} = action.payload
            console.log(code, message)
            if (code === "invalid_expiry_month" || code === "invalid_expiry_year") {
                state.formError.expiryDate = "Invalid expiration date (MM/YY)"
            } else if (code === "invalid_cvc") {
                state.formError.cvv = "Invalid CVV"
            } else if (code === "incorrect_number") {
                state.formError.cardNumber = "Invalid card number"
            }
        })


})

export default reducer
