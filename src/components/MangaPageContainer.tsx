import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux-hooks';
import { useAllManga } from '../hooks/useAllManga';
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
  const bookmarkedMangaIds = useAppSelector(
    (state) => state.manga.bookmarkedMangaIds
  );
  const { mangaList } = useAllManga();

  const currentManga = mangaList?.find((manga) => {
    if (title === slugTitle(manga.title)) {
      return manga;
    }

    return false;
  });

  const btnChange = useMemo(() => {
    if (currentManga && bookmarkedMangaIds.includes(currentManga?.id)) {
      return 'active-bookmark-btn__square';
    }

    return 'bookmark-btn__square';
  }, [currentManga, bookmarkedMangaIds]);

  const fileName = currentManga?.relationships.reduce((file: string, rel) => {
    if (rel.type === 'cover_art') {
      return rel.attributes.fileName;
    }
    return file;
  }, '');

  const coverUrl =
    fileName && currentManga
      ? `https://uploads.mangadex.org/covers/${currentManga.id}/${fileName}.256.jpg`
      : null;

  return currentManga ? (
    <MangaPage
      coverUrl={coverUrl}
      currentManga={currentManga}
      bookmarkedMangaIds={bookmarkedMangaIds}
      btnChange={btnChange}
      toggleBookmark={toggleBookmark}
    />
  ) : null;
};

export default MangaPageContainer;
