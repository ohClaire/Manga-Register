import React from 'react';
import BookmarkBtn from './BookmarkBtn';
import { Manga } from '../interfaces';
import './MangaPage.css';

type Props = {
  coverUrl: string | null;
  currentManga: Manga | null;
  bookmarkedMangaIds: string[];
  btnChange: string;
  toggleBookmark: (cardId: string) => void;
};

const MangaPage = ({
  coverUrl,
  currentManga,
  bookmarkedMangaIds,
  btnChange,
  toggleBookmark,
}: Props) => {
  return (
    <div className="details">
      <div className="details__container">
        <img
          className="details__cover-art"
          src={coverUrl!}
          alt={currentManga?.title}
        />
        <BookmarkBtn
          isMangaPage={true}
          toggleBookmark={toggleBookmark}
          bookmarkedMangaIds={bookmarkedMangaIds}
          mangaId={currentManga?.id}
          btnChange={btnChange}
        />
      </div>
      <div>
        <h3>{currentManga?.title}</h3>
        <p>Summary: {currentManga?.description}</p>
        <p>Release: {currentManga?.year}</p>
        <p>Status: {currentManga?.status}</p>
      </div>
    </div>
  );
};

export default MangaPage;
