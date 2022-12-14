import React from 'react';
import HomePage from './components/HomePage';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import MangaPageContainer from './components/MangaPageContainer';
import { actions } from './features/manga/manga';
import { useAppDispatch } from '../src/hooks/redux-hooks';
import './App.css';

export default function App() {
  const dispatch = useAppDispatch();

  const toggleBookmark = (cardId: string) => {
    dispatch(actions.toggleBookmark(cardId));
  };

  return (
    <main className="app">
      <h1 className="app-title">Manga Register</h1>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage toggleBookmark={toggleBookmark} isAllManga={true} />
          }
        />
        <Route
          path="/bookmarks"
          element={
            <HomePage toggleBookmark={toggleBookmark} isAllManga={false} />
          }
        />
        <Route
          path="/manga/:title"
          element={<MangaPageContainer toggleBookmark={toggleBookmark} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}
