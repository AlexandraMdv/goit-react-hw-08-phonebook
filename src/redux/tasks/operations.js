import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://67d13f52825945773eb3918f.mockapi.io/api/v1";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async(_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async(contact, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", contact);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async(contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);