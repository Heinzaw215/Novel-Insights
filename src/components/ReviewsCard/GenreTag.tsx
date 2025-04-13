type GenreTagProps = {
  label: string;
  onClick?: () => void;
};

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

const GenreTag = ({ label, onClick }: GenreTagProps) => {
  const icon = genreIcons[label] || "🏷️"; // Default icon if genre is not listed
  return (
    <span
      onClick={onClick}
      className="inline-block bg-yellow-300 text-yellow-900 px-3 py-1 rounded-full text-xs font-medium cursor-pointer hover:bg-yellow-400 transition-colors duration-200"
    >
      {icon} {label}
    </span>
  );
};

export default GenreTag;
