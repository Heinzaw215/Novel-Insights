import { z } from "zod";
import { reviewSchema } from "./reviews";

export const bookSchema = z.object({
  bookID: z.number().int("Book ID must be an integer"),
  bookName: z.string().min(1, "Book name is required").trim(),
  slug: z
    .string()
    .min(1, "Slug is required")
    .transform((val) => val.toLowerCase().replace(/\s+/g, "-")),
  author: z.string().min(1, "Author is required").trim(),
  bookCover: z.string().url("Book Cover must be a valid URL").trim(),
  releasedDate: z
    .number()
    .positive("The releasedDate should be positive.")
    .int("releasedDate must be an integer"),
  genres: z.array(z.string().trim()).default([]),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters")
    .trim(),
  price: z.number().positive("The price should be positive."),
  publisher: z.string().trim().optional(),
  language: z.string().trim().optional(),
  pageCount: z.number().int().optional(),
  isFeatured: z.boolean().default(false),
  isBestSeller: z.boolean().default(false),
  reviews: z.array(reviewSchema).optional(),
});

export type Book = z.infer<typeof bookSchema>;

export const genreIcons: { [key: string]: string } = {
  Fantasy: "🧙",
  Romance: "❤️",
  Horror: "👻",
  "Sci-Fi": "🚀",
  Mystery: "🕵️",
  Thriller: "🔪",
  Adventure: "🏞️",
  Historical: "🏰",
  "Non-Fiction": "📚",
  Biography: "👤",
  "Self-Help": "💪",
  Poetry: "📜",
  Children: "👶",
  YoungAdult: "👩‍🎓",
  "Graphic Novel": "📖",
  Comics: "📰",
  Classic: "📚",
  Dystopian: "🌆",
  "Fantasy Romance": "💖",
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
