interface Book {
  id: number;
  name: string;
  bookcover: string;
  author: string;
  releasedDate: number;
  catagories: Array<string>;
  description: string;
  rating: number;
  isAvailable: boolean;
}

export const BookList: Book[] = [
  {
    id: 1,
    name: "Harry Potter and The Philosopher's Stone",
    bookcover: "/harry-potter-philosopher's-stone.jpg",
    author: "J.K. Rowling",
    releasedDate: 1997,
    catagories: ["Fantasy", "Magic"],
    description: "A young boy discovers he is a wizard and attends a magical school.",
    rating: 4.9,
    isAvailable: true,
  },
  {
    id: 2,
    name: "The Hobbit",
    bookcover: "/the-hobbit.jpg",
    author: "J.R.R. Tolkien",
    releasedDate: 1937,
    catagories: ["Fantasy", "Adventure"],
    description: "A hobbit embarks on an epic journey to reclaim a lost treasure guarded by a dragon.",
    rating: 4.8,
    isAvailable: true,
  },
  {
    id: 3,
    name: "1984",
    bookcover: "/1984.jpg",
    author: "George Orwell",
    releasedDate: 1949,
    catagories: ["Dystopian", "Political Fiction"],
    description: "A chilling depiction of a totalitarian regime and its impact on society.",
    rating: 4.7,
    isAvailable: false,
  },
  {
    id: 4,
    name: "To Kill a Mockingbird",
    bookcover: "/to-kill-a-mockingbird.jpg",
    author: "Harper Lee",
    releasedDate: 1960,
    catagories: ["Classic", "Drama"],
    description: "A story of racial injustice and moral growth in the American South.",
    rating: 4.9,
    isAvailable: true,
  },
  {
    id: 5,
    name: "The Great Gatsby",
    bookcover: "/the-great-gatsby.jpg",
    author: "F. Scott Fitzgerald",
    releasedDate: 1925,
    catagories: ["Classic", "Tragedy"],
    description: "A critique of the American Dream set in the Roaring Twenties.",
    rating: 4.5,
    isAvailable: true,
  },
  {
    id: 6,
    name: "Pride and Prejudice",
    bookcover: "/pride-and-prejudice.jpg",
    author: "Jane Austen",
    releasedDate: 1813,
    catagories: ["Romance", "Classic"],
    description: "A witty exploration of love, class, and social expectations in 19th-century England.",
    rating: 4.6,
    isAvailable: true,
  },
  {
    id: 7,
    name: "The Catcher in the Rye",
    bookcover: "/the-catcher-in-the-rye.jpg",
    author: "J.D. Salinger",
    releasedDate: 1951,
    catagories: ["Classic", "Coming-of-Age"],
    description: "A teenager's journey through angst and alienation in post-war America.",
    rating: 4.3,
    isAvailable: false,
  },
  {
    id: 8,
    name: "The Alchemist",
    bookcover: "/the-alchemist.jpg",
    author: "Paulo Coelho",
    releasedDate: 1988,
    catagories: ["Philosophy", "Adventure"],
    description: "A shepherd's journey to discover his personal legend and fulfill his dreams.",
    rating: 4.8,
    isAvailable: true,
  },
  {
    id: 9,
    name: "The Lord of the Rings: The Fellowship of the Ring",
    bookcover: "/the-fellowship-of-the-ring.jpg",
    author: "J.R.R. Tolkien",
    releasedDate: 1954,
    catagories: ["Fantasy", "Adventure"],
    description: "The first part of an epic tale of friendship, courage, and the battle against evil.",
    rating: 4.9,
    isAvailable: true,
  },
  {
    id: 10,
    name: "The Da Vinci Code",
    bookcover: "/the-da-vinci-code.jpg",
    author: "Dan Brown",
    releasedDate: 2003,
    catagories: ["Thriller", "Mystery"],
    description: "A symbologist unravels a conspiracy hidden in famous works of art.",
    rating: 4.4,
    isAvailable: true,
  },
];