import React from 'react';
import { Manga } from '../interfaces';
import './MangaDetails.css';

type Props = {
  currentManga: Manga | null;
};

const MangaDetails = ({ currentManga }: Props) => {
  const fileName = currentManga?.relationships.reduce((file, rel) => {
    if (rel.type === 'cover_art') {
      return rel.attributes.fileName;
    }
    return file;
  }, '');

  return (
    <div className="details">
      <img
        src={`https://uploads.mangadex.org/covers/${currentManga?.id}/${fileName}.256.jpg`}
        alt={currentManga?.title}
      />
      <h3>{currentManga?.title}</h3>
      <p>{currentManga?.description}</p>
      <p>Rating</p>
      <p>{currentManga?.year}</p>
      <p>{currentManga?.status}</p>
    </div>
  );
};

export default MangaDetails;
