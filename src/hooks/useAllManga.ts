import { useState, useEffect } from "react";
import { getMangaList } from "../apiCalls";
import { Manga } from "../interfaces";

export function useAllManga() {
  const [mangaList, setMangaList] = useState<Manga[] | null>(null);

  useEffect(() => {
    getMangaList()
      .then((mangaList) => setMangaList(mangaList))
      .catch((error) => console.log(error));
  }, []);

  return mangaList;
}
