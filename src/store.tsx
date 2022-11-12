import { configureStore } from '@reduxjs/toolkit';
import mangaReducer from './features/manga/manga';

export const store = configureStore({
  reducer: {
    manga: mangaReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {manga: mangaReducer}
export type AppDispatch = typeof store.dispatch;
