import React from 'react';
import { useParams } from 'react-router-dom';
import { useAllManga } from '../hooks/useAllManga';
import { slugTitle } from './MangaList';
import inactiveBookmark from '../assets/bookmark.png';
import activeBookmark from '../assets/active-bookmark.png';
import './MangaPage.css';
import { useAppSelector } from '../hooks';

type Params = {
  title: string;
};

type Props = {
  toggleBookmark: (cardId: string) => void;
};

const MangaPage = ({ toggleBookmark }: Props) => {
  const bookmarkedMangaIds = useAppSelector(
    (state) => state.manga.bookmarkedMangaIds
  );
  const mangaList = useAllManga();
  const { title } = useParams<Params>();
  const currentManga = mangaList?.find((manga) => {
    if (title === slugTitle(manga.title)) {
      return manga;
    }
  });
  const fileName = currentManga?.relationships.reduce((file, rel) => {
    if (rel.type === 'cover_art') {
      return rel.attributes.fileName;
    }
    return file;
  }, '');

  return (
    <div className="details">
      <div className="details__container">
        <img
          className="details__cover-art"
          src={`https://uploads.mangadex.org/covers/${currentManga?.id}/${fileName}.256.jpg`}
          alt={currentManga?.title}
        />
        <button
          className="details__bookmark-btn"
          onClick={() => {
            currentManga && toggleBookmark(currentManga?.id);
          }}
        >
          <img
            src={
              currentManga && bookmarkedMangaIds.includes(currentManga?.id)
                ? activeBookmark
                : inactiveBookmark
            }
            alt="bookmark icon"
          />
        </button>
      </div>

      <h3>{currentManga?.title}</h3>
      <p>Summary: {currentManga?.description}</p>
      <p>Release: {currentManga?.year}</p>
      <p>Status: {currentManga?.status}</p>
    </div>
  );
};

export default MangaPage;
