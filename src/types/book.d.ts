export interface Book {
  id: number;
  name: string;
  bookCover: string;
  author: string;
  releasedDate: number | Date;
  categories: Array<string>;
  description: string;
  rating: number;
  price:number;
  isAvailable: boolean;
}

const genreIcons: { [key: string]: string } = {
  Fantasy: "🧙",
  Romance: "❤️",
  Horror: "👻",
  SciFi: "🚀",
  Mystery: "🕵️",
  Thriller: "🔪",
  Adventure: "🏞️",
  Historical: "🏰",
  NonFiction: "📚",
  Biography: "👤",
  SelfHelp: "💪",
  Poetry: "📜",
  Children: "👶",
  YoungAdult: "👩‍🎓",
  GraphicNovel: "📖",
  Comics: "📰",
  Classic: "📚",
  Dystopian: "🌆",
  FantasyRomance: "💖",
  Paranormal: "👻",
  Action: "⚔️",
  Comedy: "😂",
  Drama: "🎭",
  Western: "🤠",
  Crime: "🔫",
  Sports: "⚽",
  Cooking: "🍳",
  Travel: "✈️",
  Health: "🏥",
  Business: "💼",
  Technology: "💻",
  Art: "🎨",
  Music: "🎶",
  Religion: "⛪",
};