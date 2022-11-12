import React from 'react';
import { useParams } from 'react-router-dom';
import { Manga } from '../interfaces';
import './MangaDetails.css';

export const slugTitle = (title: string): string => {
  return title
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .split(' ')
    .join('-')
    .toLowerCase();
};

type Params = {
  title: any;
};

const MangaDetails = () => {
  let { title } = useParams<Params>();

  if (slugTitle(title)) {
  }
  // const fileName = currentManga?.relationships.reduce((file, rel) => {
  //   if (rel.type === 'cover_art') {
  //     return rel.attributes.fileName;
  //   }
  //   return file;
  // }, '');

  console.log(title);
  return (
    <div className="details">
      Hello
      {/* <img
        src={`https://uploads.mangadex.org/covers/${currentManga?.id}/${fileName}.256.jpg`}
        alt={currentManga?.title}
      />
      <h3>{currentManga?.title}</h3>
      <p>{currentManga?.description}</p>
      <p>Rating</p>
      <p>{currentManga?.year}</p>
      <p>{currentManga?.status}</p> */}
    </div>
  );
};

export default MangaDetails;
