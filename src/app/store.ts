import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../feature/authSlice";
// ...

export const Store = configureStore({
  reducer: {
    authData: authSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
