import { MangaData, Manga } from './interfaces';

type FetchResponse = {
  data: MangaData[];
  limit: number;
  offset: number;
  response: string;
  result: string;
  total: number;
};

export const getMangaList = async (): Promise<Manga[]> => {
  const response = await fetch(
    'https://api.mangadex.org/manga?limit=30&includedTagsMode=AND&excludedTagsMode=OR&status%5B%5D=ongoing&status%5B%5D=completed&publicationDemographic%5B%5D=shounen&publicationDemographic%5B%5D=shoujo&contentRating%5B%5D=safe&order%5BlatestUploadedChapter%5D=desc&includes%5B%5D=manga&includes%5B%5D=chapter&includes%5B%5D=cover_art&includes%5B%5D=author&includes%5B%5D=artist'
  );
  const manga: FetchResponse = await response.json();
  const filteredData = manga.data.map((book): Manga => {
    return {
      id: book.id,
      title: book.attributes.title.en,
      description: book.attributes.description.en,
      year: book.attributes.year,
      status: book.attributes.status,
      relationships: book.relationships,
    };
  });

  return filteredData;
};
