import React from 'react';
import './BrowserPg.css';
import { Manga } from '../interfaces';
import MangaCard from './MangaCard';

type Props = {
  mangaList: Manga[] | null;
  toggleBookmark: (id: string) => void;
  isAllManga: boolean;
  selectManga: (id: string) => void;
};
const BrowserPg = ({
  mangaList,
  toggleBookmark,
  isAllManga,
  selectManga,
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
            selectManga={selectManga}
          />
        )}
      </div>
    </div>
  );
};

export default BrowserPg;
