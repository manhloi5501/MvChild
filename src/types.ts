export interface GenreType {
  name: string;
  slug: string;
}

export interface EpisodeType {
  id: number;
  name: number;
  special_name: number;
  detail_name: string | null;
  full_name: string;
  film_name: string;
  slug: string;
  link: string;
  views: number;
  is_copyrighted: boolean | null;
  has_preview: boolean | null;
  thumbnail_small: string;
  thumbnail_medium: string;
  upcoming: boolean | null;
  videoSource: string;
}
export interface AnimeInfoType {
  id: number;
  name: string;
  slug: string;
  thumbnail: string;
  views: number;
  genres: GenreType[];
  likes: number;
  follows: number;
  subTeams: string[];
  description: string;
  episodes: EpisodeType[];
}

export interface AnimeType {
  // id: number;
  name: string;
  thumbnail: string;
  time: string;
  slug: string;
  views: number;
  latestEpisode?: {
    name?: string;
    views?: number;
  };
  episodeIndex?: number;
}

export interface Ranking {
  name: string;
  slug: string;
}

export interface Sort {
  name: string;
  slug: string;
}

export interface SlideType {
  thumbnail: string;
  slug: string;
  views: string;
  name: string;
}

export interface SectionType {
  title: string;
  data?: AnimeType[];
  slug?: string;
  category?: string;
  isShuffle?: boolean;
}

export interface SearchResultType {
  id: number;
  name: string;
  slug: string;
  thumbnail: string;
  views: number;
  is_movie: boolean;
  time: string;
}

export interface UserInfoType {
  displayName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  photoURL?: string | null;
  providerId: string | null;
  uid: string;
}

export interface ActionType {
  type: string;
  payload?: any | never;
}
