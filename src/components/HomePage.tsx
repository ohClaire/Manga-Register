import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { FilteredData } from '../interfaces';
import getMangaList from '../apiCalls';
import MangaCard from './MangaCard';

const HomePage = () => {
  const [mangaList, setMangaList] = useState<FilteredData | null>(null);

  useEffect(() => {
    getMangaList()
      .then((mangaList: FilteredData) => setMangaList(mangaList))
      .catch((error) => console.log(error));
  }, []);

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

  return (
    <div>
      <h2>Browse Manga for your next read!</h2>
      <MangaCard mangaList={mangaList} />
    </div>
  );
};

export default HomePage;
