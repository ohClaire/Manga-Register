import React, { useEffect, useState } from 'react';
import BrowserPg from './components/BrowserPg';
import { Manga } from './interfaces';
import { getMangaList } from './apiCalls';
import MangaDetails from './components/MangaDetails';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';

export default function App() {
  const [mangaList, setMangaList] = useState<Manga[] | null>(null);
  // const [bookmarkedMangaIds, setBookmarkedMangaIds] = useState<string[]>([]);
  // const [bookmarkList, setBookmarkList] = useState<Manga[] | []>([]);
  const [currentManga, setCurrentManga] = useState<Manga | null>(null);

  const bookmarkedMangas = mangaList?.filter((manga) => manga.isBookmarked);

  useEffect(() => {
    getMangaList()
      .then((mangaList) => setMangaList(mangaList))
      .catch((error) => console.log(error));
  }, []);

  const toggleBookmark = (cardId: string) => {
    const updatedList = mangaList?.map((manga) => {
      if (manga.id === cardId) {
        manga.isBookmarked = !manga.isBookmarked;
      }
      return manga;
    });
    updatedList && setMangaList(updatedList);
  };

  const selectManga = (cardId: string) => {
    const selectedManga = mangaList?.find((manga) => manga.id === cardId);
    selectedManga && setCurrentManga(selectedManga);
  };

  return (
    <main className="app">
      <h1 className="app-title">Manga Register</h1>
      <NavBar />
      <Routes>
        <Route
          path="/browse"
          element={
            <BrowserPg
              mangaList={mangaList!}
              toggleBookmark={toggleBookmark}
              isAllManga={true}
              selectManga={selectManga}
            />
          }
        />
        <Route
          path="/bookmarks"
          element={
            <BrowserPg
              mangaList={bookmarkedMangas!}
              toggleBookmark={toggleBookmark}
              isAllManga={false}
              selectManga={selectManga}
            />
          }
        />
        <Route
          path="/manga/:title"
          element={<MangaDetails currentManga={currentManga} />}
        />
      </Routes>
    </main>
  );
}
