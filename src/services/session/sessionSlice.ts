import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { fetchSessionDetails } from "./sessionService";
import { APIStatus, APIError } from "../types";

export interface SessionState {
  sessionDetails: {
    discussionNo: number;
    isRecorded: boolean;
    startTime: string;
  };
  status: APIStatus;
  error: APIError;
}

const initialState: SessionState = {
  sessionDetails: {
    isRecorded: true,
    discussionNo: 0,
    startTime: "",
  },
  error: { code: 0, message: "" },

  status: APIStatus.IDLE,
};

export const sessionSlice = createSlice({
  name: "session",
  initialState: initialState,
  reducers: {
    updateSession: (state: SessionState, action: PayloadAction<SessionState>) => {
      state.sessionDetails = action.payload.sessionDetails
    },
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(
        fetchSessionDetails.fulfilled,
        (state: SessionState, action: PayloadAction<SessionState>) => {
          state.sessionDetails = action.payload.sessionDetails;
          state.status = APIStatus.FULFILLED;
        }
      )
      .addCase(
        fetchSessionDetails.rejected,
        (state: SessionState, action: any) => {
          state.error = action.payload;
          state.status = APIStatus.REJECTED;
        }
      )
      .addCase(fetchSessionDetails.pending, (state: SessionState) => {
        state.status = APIStatus.PENDING;
      });
  },
});

export const { updateSession } = sessionSlice.actions;
export const selectSessionDetails = (state: RootState) =>
  state.session.sessionDetails;
export default sessionSlice.reducer;
