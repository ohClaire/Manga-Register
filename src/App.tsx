// import React, { useEffect, useState } from 'react';
import React from 'react';
import BrowserPg from './components/BrowserPg';
// import { Manga } from './interfaces';
// import { getMangaList } from './apiCalls';
import MangaPage from './components/MangaPage';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import { actions } from './features/manga/manga';
import { useAppDispatch } from './hooks';
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
          path="/browse"
          element={
            <BrowserPg toggleBookmark={toggleBookmark} isAllManga={true} />
          }
        />
        <Route
          path="/bookmarks"
          element={
            <BrowserPg toggleBookmark={toggleBookmark} isAllManga={false} />
          }
        />
        <Route
          path="/:title"
          element={<MangaPage toggleBookmark={toggleBookmark} />}
        />
      </Routes>
    </main>
  );
}
