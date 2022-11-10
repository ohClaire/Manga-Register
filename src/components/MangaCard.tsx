import React from 'react';
import './MangaCard.css';
import { Manga } from '../interfaces';

type Props = {
  mangaList: Manga[];
};

const MangaCard = ({ mangaList }: Props) => {
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
          className="card-cover_art"
          id={manga.id}
          alt={`Cover of manga.title`}
          src={`https://uploads.mangadex.org/covers/${manga.id}/${fileName}.256.jpg`}
        />
      </div>
    );
  });

  return <>{covers}</>;
};

export default MangaCard;
