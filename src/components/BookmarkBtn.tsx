import React from 'react';
import inactiveBookmark from '../assets/bookmark.png';
import activeBookmark from '../assets/active-bookmark.png';
import './BookmarkBtn.css';

type Props = {
  toggleBookmark: (cardId: string) => void;
  bookmarkedMangaIds: string[];
  mangaId: string | undefined;
  isMangaPage: boolean;
  btnChange?: string;
};

const BookmarkBtn = ({
  toggleBookmark,
  bookmarkedMangaIds,
  mangaId,
  isMangaPage,
  btnChange,
}: Props) => {
  const roundBtn = (
    <button
      className="bookmark-btn__round"
      onClick={(e) => {
        e.preventDefault();
        toggleBookmark(mangaId!);
      }}
    >
      <img
        src={
          bookmarkedMangaIds.includes(mangaId!)
            ? activeBookmark
            : inactiveBookmark
        }
        alt="bookmark icon"
      />
    </button>
  );

  const squareBtn = (
    <button
      className={btnChange}
      onClick={(e) => {
        e.preventDefault();
        toggleBookmark(mangaId!);
      }}
    >
      Bookmark
    </button>
  );

  return isMangaPage ? squareBtn : roundBtn;
};

export default BookmarkBtn;
