import { z } from "zod";

export const reviewSchema = z.object({
  bookName: z.string().trim(),
  excerpt: z.string(),
  rating: z.number().min(0).max(5),
  reviewer: z.string(),
  date: z.string().optional(),
  genres: z.array(z.string()).default([]),
  content: z.string().optional(),
});

export type Review = z.infer<typeof reviewSchema>;

export interface GenreTagProps {
  genre: string;
}

export interface GenreIcons {
  [key: string]: string;
}
