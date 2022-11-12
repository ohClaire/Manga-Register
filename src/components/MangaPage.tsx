// import React, { useEffect, useState } from 'react';
import React from 'react';
import { useParams } from 'react-router-dom';
// import { getMangaList } from '../apiCalls';
// import { useAppDispatch, useAppSelector } from '../hooks';
import { useAllManga } from '../hooks/useAllManga';
// import { Manga } from '../interfaces';
import './MangaPage.css';

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

type Params = {
  title: string;
};

const MangaPage = () => {
  const mangaList = useAllManga();

  let { title } = useParams<Params>();
  let currentManga = mangaList?.find((manga) => {
    if (title === slugTitle(manga.title)) {
      return manga;
    }
    return manga;
  });

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
      <p>{currentManga?.year}</p>
      <p>{currentManga?.status}</p>
    </div>
  );
};

export default MangaPage;
