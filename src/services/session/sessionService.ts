import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIError } from "../types";
import { publicRequest, getExceptionPayload } from "../serviceRespHandling";
import { SessionState } from "./sessionSlice";

export const fetchSessionDetails = createAsyncThunk<SessionState, void, { rejectValue: APIError }>(
    "session/fetchSessionDetails",
    async (_, { rejectWithValue }) => {
        try {
            const response = await publicRequest.get<SessionState>('/session.json');
            return response.data;
        }
        catch (ex) {
            return rejectWithValue(getExceptionPayload(ex));
        }
    }
);
