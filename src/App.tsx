import React, { useEffect, useState } from 'react';
import HomePage from '../src/components/HomePage';
import { Manga } from './interfaces';
import { getMangaList } from './apiCalls';
import './App.css';

export default function App() {
  const [mangaList, setMangaList] = useState<Manga[] | null>(null);
  const [bookmarkList, setBookmarkList] = useState<Manga[] | []>([]);

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
    setMangaList(updatedList!);
  };

  const addToBookmarkList = () => {
    const updatedList = mangaList?.filter((manga) => manga.isBookmarked);
    setBookmarkList(updatedList!);
  };

  return (
    <main className="app">
      <h1 className="app-title">Manga Register</h1>
      <HomePage
        mangaList={mangaList}
        toggleBookmark={toggleBookmark}
        addToBookmarkList={addToBookmarkList}
        isAllManga={true}
      />
      <HomePage
        mangaList={bookmarkList}
        toggleBookmark={toggleBookmark}
        addToBookmarkList={addToBookmarkList}
        isAllManga={false}
      />
    </main>
  );
}
