import { title } from 'process';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux-hooks';
import { useAllManga } from '../hooks/useAllManga';
import { Manga } from '../interfaces';
import { slugTitle } from './MangaList';
import MangaPage from './MangaPage';

type Props = {
  toggleBookmark: (cardId: string) => void;
};

type Params = {
  title: string;
};

const MangaPageContainer = ({ toggleBookmark }: Props) => {
  const { title } = useParams<Params>();
  const [btnChange, setBtnChange] = useState<string>('bookmark-btn__square');
  const [coverUrl, setCoverUrl] = useState<string | null>(null);
  const [currentManga, setCurrentManga] = useState<Manga | null>(null);
  const bookmarkedMangaIds = useAppSelector(
    (state) => state.manga.bookmarkedMangaIds
  );
  const mangaList = useAllManga();

  useEffect(() => {
    if (mangaList) {
      const manga: Manga | undefined = mangaList?.find((manga) => {
        if (title === slugTitle(manga.title)) {
          return manga;
        }
      });
      setCurrentManga(manga!);
    }
    if (currentManga && bookmarkedMangaIds.includes(currentManga?.id)) {
      setBtnChange('active-bookmark-btn__square');
    } else {
      setBtnChange('bookmark-btn__square');
    }
  }, [mangaList, bookmarkedMangaIds, currentManga]);

  useEffect(() => {
    if (currentManga && title) {
      const fileName: string = currentManga.relationships.reduce(
        (file: string, rel) => {
          if (rel.type === 'cover_art') {
            return rel.attributes.fileName;
          }
          return file;
        },
        ''
      );
      setCoverUrl(
        `https://uploads.mangadex.org/covers/${currentManga?.id}/${fileName}.256.jpg`
      );
    }
  }, [currentManga, title]);

  return (
    <MangaPage
      coverUrl={coverUrl}
      currentManga={currentManga}
      bookmarkedMangaIds={bookmarkedMangaIds}
      btnChange={btnChange}
      toggleBookmark={toggleBookmark}
    />
  );
};

export default MangaPageContainer;
