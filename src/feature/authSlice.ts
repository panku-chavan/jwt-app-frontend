import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as endpoint from "../networkUtility/endponts";

// Define a type for the slice state
interface UserData {
  id: string;
  name: string;
  email: string;
}
interface AuthState {
  userData: UserData | null;
}
interface loginPayload {
  email: String;
  password: String;
}
interface setUserDataPayload {
  userData: any;
}
// Define the initial state using that type
const initialState: AuthState = {
  userData: null,
};

export const loginUser = createAsyncThunk(
  "auth/login",
  async (payload: loginPayload, { dispatch }) => {
    await fetch(endpoint.loginApi, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        return response.json();
      })
      .then((result: any) => {
        console.log(result);
        if (result.statusCode === 200) {
          dispatch(
            setUserData({
              userData: result.result,
            })
          );
        }
      });
  }
);

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<setUserDataPayload>) => {
      return {
        ...state,
        userData: action.payload.userData,
      };
    },
  },
});

export const { setUserData } = authSlice.actions;

export default authSlice.reducer;
