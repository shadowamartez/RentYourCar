import { createSlice } from '@reduxjs/toolkit';
import { getAllCars } from './carsOperations';

const initialState = {
    allCars: [],
    favorites: [],
    isLoading: false,
    error: null,
};

const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        toggleFavorite: (state, action) => {
            const carId = action.payload;
            const index = state.allCars.findIndex((car) => car.id === carId);

            if (index !== -1) {
                const car = state.allCars[index];

            const isFavorite = state.favorites.some((favorite) => favorite.id === carId);

            if (isFavorite) {
            state.favorites = state.favorites.filter((favorite) => favorite.id !== carId);
        } else {
            state.favorites.push(car);
        }

            state.allCars[index].isFavorite = !isFavorite;
        }
    },
    setFavorites: (state, action) => {
        state.favorites = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllCars.fulfilled, (state, action) => {
                state.allCars = action.payload.map((car) => ({
                ...car,
            isFavorite: false, 
            }));
            state.isLoading = false;
            state.error = null;
        })
            .addCase(getAllCars.pending, (state) => {
            state.isLoading = true;
        })
            .addCase(getAllCars.rejected, (state) => {
            state.isLoading = false;
        });
    },
});

export const { toggleFavorite, setFavorites } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;