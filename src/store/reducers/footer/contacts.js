import {createReducer} from "@reduxjs/toolkit";
import {getContactsDataRequest} from "../../actions/footer/contacts";

const initialState = {
    contacts: {
        address: '',
        email: '',
        phone: ''
    }
}

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getContactsDataRequest.fulfilled, (state, action) => {
            const {contacts} = action.payload;

            contacts.map(c => {
                if (Object.prototype.hasOwnProperty.call(state.contacts, c.type)){
                    state.contacts[c.type] = c.info
                }
            })
        })
})

export default reducer;
