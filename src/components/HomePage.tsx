import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { Manga } from '../interfaces';
import { getMangaList } from '../apiCalls';
import MangaCard from './MangaCard';

const HomePage = () => {
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

  return (
    <div className="home">
      <h2 className="home-title">Browse from the best manga!</h2>
      <div className="home-container">
        {mangaList && (
          <MangaCard mangaList={mangaList} toggleBookmark={toggleBookmark} />
        )}
      </div>
    </div>
  );
};

export default HomePage;
