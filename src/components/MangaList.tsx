import React from 'react';
import './MangaList.css';
import { Manga } from '../interfaces';
import inactiveBookmark from '../assets/bookmark.png';
import activeBookmark from '../assets/active-bookmark.png';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks';

type Props = {
  mangaList: Manga[];
  toggleBookmark: (id: string) => void;
};

export const slugTitle = (title: string) => {
  if (title) {
    return title
      .replace(/[^a-zA-Z0-9 ]/g, '')
      .split(' ')
      .join('-')
      .toLowerCase();
  } else {
    return 'Title not found';
  }
};

const MangaList = ({ mangaList, toggleBookmark }: Props) => {
  const bookmarkedMangaIds = useAppSelector(
    (state) => state.manga.bookmarkedMangaIds
  );

  const covers = mangaList.map((manga) => {
    const fileName = manga.relationships.reduce((file, rel) => {
      if (rel.type === 'cover_art') {
        return rel.attributes.fileName;
      }
      return file;
    }, '');

    return (
      <Link
        to={`/${slugTitle(manga.title)}`}
        key={manga.id}
        aria-label={manga.title}
        className="card"
      >
        <img
          className="card-cover"
          alt={`Cover of manga.title`}
          src={`https://uploads.mangadex.org/covers/${manga.id}/${fileName}.256.jpg`}
        />
        <button
          className="bookmark-btn"
          onClick={(e) => {
            e.preventDefault();
            toggleBookmark(manga.id);
          }}
        >
          <img
            src={
              bookmarkedMangaIds.includes(manga.id)
                ? activeBookmark
                : inactiveBookmark
            }
            alt="bookmark icon"
          />
        </button>
      </Link>
    );
  });

  return <>{covers}</>;
};

export default MangaList;
