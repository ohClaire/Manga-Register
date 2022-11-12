type MangaRelationship = {
  type: 'manga';
  related: string;
  attributes: {
    altTitles: {}[];
    availableTranslatedLanguages: string[];
    chapterNumbersResetOnNewVolume: boolean;
    contentRating: string;
    createdAt: string;
    description: {
      en: string;
    };
    isLocked: boolean;
    lastChapter: string | null;
    lastVolume: string | null;
    latestUploadedChapter: string;
    links: [] | null;
    originalLanguage: string;
    publicationDemographic: '' | null;
    state: string;
    status: string;
    tags: {
      id: string;
      relationships: [];
      type: string;
      attributes: {
        description: [];
        group: string;
        name: {
          en: string;
        };
        version: number;
      };
    };
    title: {
      en: string;
    };
    updatedAt: string;
    version: number;
    year: number | null;
  };
};

export type CoverArtRelationship = {
  type: 'cover_art';
  id: string;
  attributes: {
    createdAt: string;
    description: string;
    fileName: string;
    locale: string;
    updatedAt: string;
    version: 1;
    volume: string;
  };
};

type AuthorRelationship = {
  type: 'author';
  related: string;
  attributes: {
    biography: {
      en: string;
    };
    booth: null;
    createdAt: string;
    fanBox: null;
    fantia: null;
    imageUrl: null;
    melonBook: null;
    name: string;
    naver: null;
    nicoVideo: null;
    pixiv: null;
    skeb: null;
    tumblr: null;
    twitter: string;
    updatedAt: string;
    version: 3;
    website: null;
    weibo: null;
    youtube: null;
  };
};

type ArtistRelationship = {
  type: 'artist';
  id: string;
  attributes: {
    biography: {
      en: string;
    };
    booth: null;
    createdAt: string;
    fanBox: null;
    fantia: null;
    imageUrl: null;
    melonBook: null;
    name: string;
    naver: null;
    nicoVideo: null;
    pixiv: null;
    skeb: null;
    tumblr: null;
    twitter: string;
    updatedAt: string;
    version: 3;
    website: null;
    weibo: null;
    youtube: null;
  };
};

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
  relationships: (
    | MangaRelationship
    | CoverArtRelationship
    | AuthorRelationship
    | ArtistRelationship
  )[];
  type: string;
}

// Get the type of the 'relationship' key out of the MangaData
const arr: MangaData['relationships'] = [];

arr.forEach((item) => {
  if (item.type === 'cover_art') {
    item.attributes.fileName;
  }
});

export interface Manga {
  id: string;
  title: string;
  description: string;
  year: number;
  status: string;
  relationships: MangaData['relationships'];
}
