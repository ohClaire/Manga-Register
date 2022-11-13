import { useState, useEffect } from "react";
import { getMangaList } from "../apiCalls";
import { Manga } from "../interfaces";

export function useAllManga() {
  const [mangaList, setMangaList] = useState<Manga[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true)

    getMangaList()
      .then((mangaList) => setMangaList(mangaList))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return {
    error,
    mangaList,
    loading,
  };
}

