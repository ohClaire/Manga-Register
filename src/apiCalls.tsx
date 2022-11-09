import { MangaData, FilteredData } from './interfaces';

const getMangaList = async (): Promise<MangaData> => {
  const response = await fetch(
    'https://api.mangadex.org/manga?limit=30&includedTagsMode=AND&excludedTagsMode=OR&status%5B%5D=ongoing&status%5B%5D=completed&publicationDemographic%5B%5D=shounen&publicationDemographic%5B%5D=shoujo&contentRating%5B%5D=safe&order%5BlatestUploadedChapter%5D=desc&includes%5B%5D=manga&includes%5B%5D=chapter&includes%5B%5D=cover_art&includes%5B%5D=author&includes%5B%5D=artist'
  );
  const manga = await response.json();
  const filteredData = manga.data.map((book: FilteredData) => {
    return {
      id: book.id,
      title: book.attributes.title.en,
      description: book.attributes.description.en,
      year: book.attributes.year,
      status: book.attributes.status,
      coverArt: book.relationships,
    };
  });

  return filteredData;
};

export default getMangaList;

/* clean up data to only show: 
* .id
* .title.en
* .status
* .description.en
* .updatedAt
* .relationships.attributes.type === 'cover_art'
get the id and file name to retrieve manga covers
   .relationships.id
   .relationships.attributes.fileName
  fetch(https://uploads.mangadex.org/covers/:manga-id/:cover-filename)
*/
