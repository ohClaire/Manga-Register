import React, { useState } from 'react';
import './MangaCard.css';
import { Manga } from '../interfaces';
import inActiveBookmark from '../assets/bookmark.png';
import activeBookmark from '../assets/active-bookmark.png';

type Props = {
  mangaList: Manga[];
  toggleBookmark: any;
};

const MangaCard = ({ mangaList, toggleBookmark }: Props) => {
  const covers = mangaList.map((manga) => {
    const fileName = manga.relationships.reduce((file, rel) => {
      if (rel.type === 'cover_art') {
        return rel.attributes.fileName;
      }
      return file;
    }, '');

    return (
      <div key={manga.id} aria-label={manga.title} className="card">
        <img
          className="card-cover"
          id={manga.id}
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
            src={manga.isBookmarked ? activeBookmark : inActiveBookmark}
            alt="bookmark"
          />
        </button>
      </div>
    );
  });

  return <>{covers}</>;
};

export default MangaCard;
