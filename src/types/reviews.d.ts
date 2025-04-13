export interface Review {
  title: string;
  excerpt: string;
  rating: number;
  reviewer: string;
  date: string;
  genres: string[];
  content?: string;
}

export interface GenreTagProps {
  genre: string;
};

export interface GenreIcons {
  [key: string]: string;
}