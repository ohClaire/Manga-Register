import React from 'react';
import './MangaCard.css';
import { Manga } from '../interfaces';
import inactiveBookmark from '../assets/bookmark.png';
import activeBookmark from '../assets/active-bookmark.png';
import { Link } from 'react-router-dom';

type Props = {
  mangaList: Manga[];
  toggleBookmark: (id: string) => void;
  selectManga: (id: string) => void;
};

export const slugTitle = (title: string) => {
  return title
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .split(' ')
    .join('-')
    .toLowerCase();
};

const MangaCard = ({ mangaList, toggleBookmark, selectManga }: Props) => {
  const covers = mangaList.map((manga) => {
    const fileName = manga.relationships.reduce((file, rel) => {
      if (rel.type === 'cover_art') {
        return rel.attributes.fileName;
      }
      return file;
    }, '');

    // console.log(slugTitle);

    return (
      <Link
        to={slugTitle(manga.title)}
        key={manga.id}
        aria-label={manga.title}
        className="card"
      >
        <img
          className="card-cover"
          alt={`Cover of manga.title`}
          src={`https://uploads.mangadex.org/covers/${manga.id}/${fileName}.256.jpg`}
          onClick={(e) => {
            e.preventDefault();
            selectManga(manga.id);
          }}
        />
        {/* <button
          className="bookmark-btn"
          onClick={(e) => {
            e.preventDefault();
            toggleBookmark(manga.id);
          }}
        >
          <img
            src={manga.isBookmarked ? activeBookmark : inactiveBookmark}
            alt="bookmark icon"
          />
        </button> */}
      </Link>
    );
  });

  return <>{covers}</>;
};

export default MangaCard;
