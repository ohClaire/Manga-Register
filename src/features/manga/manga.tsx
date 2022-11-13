import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const url =
  'https://api.mangadex.org/manga?limit=60&includedTagsMode=AND&excludedTagsMode=OR&status%5B%5D=ongoing&status%5B%5D=completed&status%5B%5D=hiatus&publicationDemographic%5B%5D=shounen&publicationDemographic%5B%5D=shoujo&publicationDemographic%5B%5D=josei&publicationDemographic%5B%5D=seinen&contentRating%5B%5D=safe&order%5BlatestUploadedChapter%5D=desc&includes%5B%5D=manga&includes%5B%5D=chapter&includes%5B%5D=cover_art&includes%5B%5D=author&includes%5B%5D=artist';

// export const getMangaList: any = createAsyncThunk('manga/getMangaList', () => {
//   return fetch(url)
//     .then((res) => res.json())
//     .catch((err) => console.log(err));
// });

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
  // extraReducers handles lifecycle actions
  // extraReducers: {
  //   [getMangaList.pending]: (state) => {
  //     state.isLoading = true;
  //   },
  //   [getMangaList.fulfilled]: (state, action) => {
  //     console.log(action);
  //     state.isLoading = false;
  //     state.mangaList = action.payload;
  //   },
  //   [getMangaList.rejected]: (state) => {
  //     state.isLoading = false; // handles network errors
  //   },
  // },
});

export const actions = mangaSlice.actions;

export default mangaSlice.reducer;
