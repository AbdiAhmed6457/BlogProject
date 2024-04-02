import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      signInStart: (state) => {
        state.loading = true;
        state.error = null;
      },
      signInSuccess: (state, action) => {
        state.currentUser = action.payload;
        state.loading = false;
        state.error = null;
      },
      signInFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      updateSuccess: (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
        state.error = null;
      },
      updateStart: (state) => {
        state.loading = true;
        state.error = null;
      },
      updateFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload
      },
      deleteUserSucces: (state) => {
        state.currentUser = null;
        state.loading = false;
        state.error = null;
      },
      deleteUserStart: (state) => {
        state.loading = true;
        state.error = null;
      },
      deleteFailure: (state) {
        state.loading = false;
        state.error = action.payload;
      }
    },
})

export const {
    signInStart,
    signInSuccess,
    updateStart,
    updateSuccess,
    deleteFailure,
    deleteUserStart,
    deleteUserSucces,
    updateFailure,
    signInFailure} = userSlice.actions;

    export default userSlice.reducer;