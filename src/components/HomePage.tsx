import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { Manga } from '../interfaces';
import { getMangaList } from '../apiCalls';
import MangaCard from './MangaCard';

const HomePage = () => {
  const [mangaList, setMangaList] = useState<Manga[] | null>(null);

  useEffect(() => {
    getMangaList()
      .then((mangaList) => setMangaList(mangaList))
      .catch((error) => console.log(error));
  }, []);

  // console.log(mangaList);
  return (
    <div className="home">
      <h2 className="home-title">Browse from the best manga!</h2>
      <div className="home-container">
        {mangaList && <MangaCard mangaList={mangaList} />}
      </div>
    </div>
  );
};

export default HomePage;
