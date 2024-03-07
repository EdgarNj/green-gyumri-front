import {configureStore} from "@reduxjs/toolkit";
import reducer from "./reducers";

const store = configureStore({
    reducer,
})
window.getState = store.getState

export default store;
