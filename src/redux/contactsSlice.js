import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact } from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";

const initialState = {
    items: [],
    loading: false,
    error: null,
};

const isPending = (action) => typeof action.type === 'string' && action.type.endsWith('/pending');
const isRejected = (action) => typeof action.type === 'string' && action.type.endsWith('/rejected');

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        // fetchingInProgress(state) { 
        //     state.loading = true;
        // },
        // fetchingSuccess(state, action) {
        //     state.loading = false;
        //     state.error = null;
        //     state.items = action.payload;
        // },
        // fetchingError(state, action) {
        //     state.loading = false;
        //     state.error = action.payload;
        // },
        
        // addContact: (state, action) => {
        //     state.items.push(action.payload);
        // },
        // deleteContact: (state, action) => {
        //     state.items = state.items.filter((contact) => contact.id !== action.payload);
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addMatcher(isPending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addMatcher(isRejected, (action, state) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
});

//export const { fetchingInProgress, fetchingSuccess, fetchingError, addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const selectContactsItems = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector([selectContactsItems, selectNameFilter], (contacts, filter) => {
    return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
});
