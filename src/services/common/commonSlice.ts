import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface CommonState {
    successMessage: string;
    errorMessage: string;
};

const initialState: CommonState = {
    successMessage: '',
    errorMessage: ''
};

export const commonSlice = createSlice({
    name: "common",
    initialState: initialState,
    reducers: {
        setSuccessNotification: (state: CommonState, action: PayloadAction<string>) => {
            state.successMessage = action.payload
        }
    }
});

export const { setSuccessNotification } = commonSlice.actions;
export const selectCommon = (state: RootState) => state.common;
export default commonSlice.reducer;
