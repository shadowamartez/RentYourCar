import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from '../../api/Api';

export const instance = axios.create({
    baseURL: BASE_URL,
});

export const getAllCars = createAsyncThunk('cars/getAllCars', async (_, thunkAPI) => {
    try {
        const response = await instance.get('/');
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

