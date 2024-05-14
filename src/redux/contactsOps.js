import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { fetchingInProgress, fetchingSuccess, fetchingError } from "./contactsSlice";

axios.defaults.baseURL = "https://6641013da7500fcf1a9f50a8.mockapi.io";

// export const fetchContacts = () => async dispatch => {
//     try {
//         dispatch(fetchingInProgress());
//         const response = await axios.get("/contacts");
//         dispatch(fetchingSuccess(response.data));
//         console.log(response.data)
//     } catch (error) {
//         console.log(error);
//         dispatch(fetchingError(error.message));
//     }
// };

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll', async (arg, thunkApi) => {
        try {
            const response = await axios.get('/contacts');
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact', async (id, thunkApi) => { 
        try {
            await axios.delete(`/contacts/${id}`);
            const response = await axios.get('/contacts');
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact', async (item, thunkApi) => { 
        try {
            await axios.post('/contacts', item);
            const response = await axios.get('/contacts');
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);