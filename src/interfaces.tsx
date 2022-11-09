export interface MangaData {
  attributes: {
    altTitles: {}[];
    availableTranslatedLanguages: string[];
    chapterNumbersResenOnNewVolume: boolean;
    contentRating: string;
    createdAt: string;
    description: {
      en: string;
    };
    isLocked: boolean;
    lastChapter: string;
    lastVolume: string;
    latestUploadedChapter: string;
    links: {
      engtl: string;
    };
    originalLangauage: string;
    publicationDemographic: string;
    state: string;
    status: string;
    tags: {}[];
    title: {
      en: string;
    };
    updatedAt: string;
    version: number;
    year: number;
  };
  id: string;
  relationships: {
    attributes: {
      fileName: string;
    };
    id: string;
    type: string;
  };
  type: string;
}

export interface FilteredData {
  attributes: {
    description: {
      en: string;
    };
    title: {
      en: string;
    };
    status: string;
    year: number;
  };
  id: string;
  relationships: {
    attributes: {
      fileName: string;
    };
    id: string;
    type: string;
  };
}
