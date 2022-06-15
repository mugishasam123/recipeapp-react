import { createSlice } from '@reduxjs/toolkit'

export const mealSlice = createSlice({
    name: 'meals',
    initialState: {
        meals: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        mealsFetch: (state) => {
            state.isLoading = true;
        },
        mealsSuccess: (state, action) => {
            state.meals = action.payload;
            state.isLoading = false;
        },
        mealsError: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

export const {
    mealsFetch,
    mealsSuccess,
    mealsError,
} = mealSlice.actions;

export default mealSlice.reducer;