// import React, { useEffect, useState } from 'react';
import './BrowserPg.css';
// import { Manga } from '../interfaces';
import MangaList from './MangaList';
// import { getMangaList } from '../apiCalls';
import { useAppSelector } from '../hooks';
import { useAllManga } from '../hooks/useAllManga';
import React from 'react';

type Props = {
  toggleBookmark: (id: string) => void;
  isAllManga: boolean;
};
const BrowserPg = ({ toggleBookmark, isAllManga }: Props) => {
  const mangaList = useAllManga();

  const bookmarkedMangaIds = useAppSelector(
    (state) => state.manga.bookmarkedMangaIds
  );
  const bookmarkedMangas = mangaList?.filter((manga) =>
    bookmarkedMangaIds.includes(manga.id)
  );

  return (
    <div className="home">
      {isAllManga ? (
        <h2 className="home-title">Browse for the best manga!</h2>
      ) : (
        <h2 className="home-title">Your Bookmarks</h2>
      )}
      <div className="home-container">
        {mangaList && bookmarkedMangas && (
          <MangaList
            mangaList={isAllManga ? mangaList : bookmarkedMangas}
            toggleBookmark={toggleBookmark}
          />
        )}
      </div>
    </div>
  );
};

export default BrowserPg;
