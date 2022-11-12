import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { Manga } from '../interfaces';
import MangaCard from './MangaCard';

type Props = {
  mangaList: Manga[] | null;
  toggleBookmark: any;
  addToBookmarkList: any;
  isAllManga: boolean;
};
const HomePage = ({
  mangaList,
  toggleBookmark,
  addToBookmarkList,
  isAllManga,
}: Props) => {
  return (
    <div className="home">
      {isAllManga ? (
        <h2 className="home-title">Browse for the best manga!</h2>
      ) : (
        <h2 className="home-title">Your Bookmarks</h2>
      )}
      <div className="home-container">
        {mangaList && (
          <MangaCard
            mangaList={mangaList}
            toggleBookmark={toggleBookmark}
            addToBookmarkList={addToBookmarkList}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;