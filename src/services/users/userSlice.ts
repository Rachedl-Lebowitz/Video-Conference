import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import IUser from "../../types/IUser";
import { fetchUsers, updateUserMicrophone } from "./userService";
import { APIStatus, APIError } from "../types";

export interface UserState {
  users: { judges: IUser[]; responders: IUser[] };
  currentUserDet: {
    id: number;
    isJudge: boolean;
  };
  readyUsers: IUser[] | undefined;
  status: APIStatus;
  error: APIError;
}

const initialState: UserState = {
  users: {
    judges: [],
    responders: [],
  },
  // TODO: replace default value with real id when connecting to server after login
  currentUserDet: {
    id: 984678,
    isJudge: false,
  },
  readyUsers: [],
  status: APIStatus.IDLE,
  error: { code: 0, message: "" },
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    removeUser: (state: UserState, action: PayloadAction<number>) => {
      state.readyUsers =
        state.readyUsers &&
        state.readyUsers.filter((user: IUser) => user.id !== action.payload);
    },
  },
  extraReducers: (builder: any) => {
    // The `builder` callback form is used here because it provides correctly typed reducers from the action creators
    builder
      .addCase(
        fetchUsers.fulfilled,
        (state: UserState, action: PayloadAction<UserState>) => {
          state.users = action.payload.users;
          state.status = APIStatus.FULFILLED;
        }
      )
      .addCase(fetchUsers.rejected, (state: UserState, action: any) => {
        state.error = action.payload;
        state.status = APIStatus.REJECTED;
      })
      .addCase(fetchUsers.pending, (state: UserState) => {
        state.status = APIStatus.PENDING;
      })
      .addCase(
        updateUserMicrophone.fulfilled,
        (state: UserState, action: PayloadAction<UserState>) => {
          // Updating local user - only needed if not connected to server
          const { id, isJudge } = state.currentUserDet;
          const userType = isJudge ? 'judges' : 'responders';
          const currentUsers = state.users[userType];
          const selectedUserIndex = currentUsers.findIndex((item) => item.id === id);
          currentUsers[selectedUserIndex] = {
            ...currentUsers[selectedUserIndex],
            isMicrophoneOpen: !currentUsers[selectedUserIndex].isMicrophoneOpen,
          };
          state.status = APIStatus.FULFILLED;
          // Add more logic to use the microphone
        }
      )
      .addCase(updateUserMicrophone.rejected, (state: UserState, action: any) => {
        state.error = action.payload;
        state.status = APIStatus.REJECTED;
      })
      .addCase(updateUserMicrophone.pending, (state: UserState) => {
        state.status = APIStatus.PENDING;
      });
  },
});

export const { removeUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.user.users;
export default userSlice.reducer;
