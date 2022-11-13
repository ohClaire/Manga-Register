import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface MangaState {
  bookmarkedMangaIds: string[];
}

const initialState: MangaState = {
  bookmarkedMangaIds: [],
};

const mangaSlice = createSlice({
  name: 'manga',
  initialState,
  reducers: {
    toggleBookmark: (state, action: PayloadAction<string>) => {
      if (state.bookmarkedMangaIds.includes(action.payload)) {
        const mangaIndex = state.bookmarkedMangaIds.indexOf(action.payload);
        state.bookmarkedMangaIds.splice(mangaIndex, 1);
      } else {
        state.bookmarkedMangaIds.push(action.payload);
      }
    },
  },
});

export const actions = mangaSlice.actions;

export default mangaSlice.reducer;
