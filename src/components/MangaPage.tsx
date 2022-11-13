import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAllManga } from '../hooks/useAllManga';
import { slugTitle } from './MangaList';
import { useAppSelector } from '../hooks/redux-hooks';
import BookmarkBtn from './BookmarkBtn';
import { Manga } from '../interfaces';
import './MangaPage.css';

type Params = {
  title: string;
};

type Props = {
  toggleBookmark: (cardId: string) => void;
};

const MangaPage = ({ toggleBookmark }: Props) => {
  const { title } = useParams<Params>();
  const [btnChange, setBtnChange] = useState<string>('bookmark-btn__square');
  const bookmarkedMangaIds = useAppSelector(
    (state) => state.manga.bookmarkedMangaIds
  );
  const mangaList = useAllManga();
  let currentManga: Manga | undefined;

  useEffect(() => {
    if (currentManga && bookmarkedMangaIds.includes(currentManga?.id)) {
      setBtnChange('active-bookmark-btn__square');
    } else {
      setBtnChange('bookmark-btn__square');
    }
  }, [bookmarkedMangaIds, currentManga]);

  if (mangaList && title) {
    currentManga = mangaList?.find((manga) => {
      if (title === slugTitle(manga.title)) {
        return manga;
      }
    });
  }

  let fileName;
  if (currentManga) {
    fileName = currentManga.relationships.reduce((file: string, rel) => {
      if (rel.type === 'cover_art') {
        return rel.attributes.fileName;
      }
      return file;
    }, '');
  }

  return (
    <div className="details">
      <div className="details__container">
        <img
          className="details__cover-art"
          src={`https://uploads.mangadex.org/covers/${currentManga?.id}/${fileName}.256.jpg`}
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
