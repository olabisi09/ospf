import { configureStore } from '@reduxjs/toolkit';
import stepReducer from './stepSlice';
//import thunk from 'redux-thunk';

export const store = configureStore({
    reducer: stepReducer,
    //middleware: [thunk]
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch