import { configureStore } from "@reduxjs/toolkit";
// ...
// Import your reducers here
import bookReducer from "./features/book/bookSlice";
import { baseApi } from "./features/book/bookApi";
import { borrowApi } from "./features/borrow/borrowApi";
import borrowReducer from "./features/borrow/borrowSlice";

export const store = configureStore({
  reducer: {
    bookReducer,
    borrowReducer,
    [baseApi.reducerPath]: baseApi.reducer,
    [borrowApi.reducerPath]: borrowApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware, borrowApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
