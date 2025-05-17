import { Book } from "../schemas/book";
import { slugify } from "@/util/slugify";

export const BooksData: Book[] = [
  {
    // Book 1 (Harry Potter and The Philosopher's Stone)
    bookID: 1,
    bookName: "Harry Potter and The Philosopher's Stone",
    bookCover: "/harry-potter-philosopher's-stone.jpg",
    author: "J.K. Rowling",
    releasedDate: 1997,
    genres: ["Fantasy", "Magic"],
    description:
      "A young boy discovers he is a wizard and attends a magical school.",
    price: 10.99,
    slug: slugify("Harry Potter and The Philosopher's Stone"),
    publisher: "Bloomsbury",
    language: "English",
    pageCount: 223,
    isFeatured: true,
    isBestSeller: true,
    reviews: [
      {
        bookName: "Harry Potter and the Sorcerer's Stone",
        excerpt: "An enchanting start to a magical series!",
        rating: 5,
        reviewer: "Alice Smith",
        date: "2023-10-01",
        genres: ["Fantasy", "Adventure"],
        content:
          "An enchanting start to a magical series! I loved the characters and the magical world-building.",
      },
      {
        bookName: "Harry Potter and the Sorcerer's Stone",
        excerpt: "A captivating read for all ages.",
        rating: 4.5,
        reviewer: "Bob Johnson",
        date: "2023-10-02",
        genres: ["Fantasy", "Adventure"],
        content:
          "A captivating read for all ages. Rowling created a timeless classic that appeals to both kids and adults.",
      },
    ],
  },
  {
    // Book 2 (The Hobbit)
    bookID: 2,
    bookName: "The Hobbit",
    bookCover: "/the-hobbit.jpg",
    author: "J.R.R. Tolkien",
    releasedDate: 1937,
    genres: ["Fantasy", "Adventure"],
    description:
      "A hobbit embarks on an epic journey to reclaim a lost treasure guarded by a dragon.",
    price: 9.99,
    slug: slugify("The Hobbit"),
    publisher: "",
    language: "english",
    pageCount: 200,
    isFeatured: true,
    isBestSeller: true,
  },
  {
    // Book 3 (1984)
    bookID: 3,
    bookName: "1984",
    bookCover: "/1984.jpg",
    author: "George Orwell",
    releasedDate: 1949,
    genres: ["Dystopian", "Political Fiction"],
    description:
      "A chilling depiction of a totalitarian regime and its impact on society.",
    price: 8.99,
    slug: "1984",
    isFeatured: true,
    isBestSeller: true,
  },

  {
    // Book 4 (To Kill a Mockingbird)
    bookID: 4,
    bookName: "To Kill a Mockingbird",
    bookCover: "/to-kill-a-mockingbird.jpg",
    author: "Harper Lee",
    releasedDate: 1960,
    genres: ["Classic", "Drama"],
    description:
      "A story of racial injustice and moral growth in the American South.",
    price: 7.99,
    slug: "to-kill-a-mockingbird",
    isFeatured: true,
    isBestSeller: true,
  },
  {
    // Book 5 (The Great Gatsby)
    bookID: 5,
    bookName: "The Great Gatsby",
    bookCover: "/the-great-gatsby.jpg",
    author: "F. Scott Fitzgerald",
    releasedDate: 1925,
    genres: ["Classic", "Tragedy"],
    description:
      "A critique of the American Dream set in the Roaring Twenties.",
    price: 8.49,
    slug: "the-great-gatsby",
    isFeatured: true,
    isBestSeller: true,
  },
  {
    // Book 6 (Pride and Prejudice)
    bookID: 6,
    bookName: "Pride and Prejudice",
    bookCover: "/pride-and-prejudice.jpg",
    author: "Jane Austen",
    releasedDate: 1813,
    genres: ["Romance", "Classic"],
    description:
      "A witty exploration of love, class, and social expectations in 19th-century England.",
    price: 6.99,
    slug: "pride-and-prejudice",
    isFeatured: true,
    isBestSeller: true,
  },
  {
    // Book 7 (The Catcher in the Rye)
    bookID: 7,
    bookName: "The Catcher in the Rye",
    bookCover: "/the-catcher-in-the-rye.jpg",
    author: "J.D. Salinger",
    releasedDate: 1951,
    genres: ["Classic", "Coming-of-Age"],
    description:
      "A teenager's journey through angst and alienation in post-war America.",
    price: 7.49,
    slug: "the-catcher-in-the-rye",
    isFeatured: true,
    isBestSeller: true,
  },
  {
    // Book 8 (The Alchemist)
    bookID: 8,
    bookName: "The Alchemist",
    bookCover: "/the-alchemist.jpg",
    author: "Paulo Coelho",
    releasedDate: 1988,
    genres: ["Philosophy", "Adventure"],
    description:
      "A shepherd's journey to discover his personal legend and fulfill his dreams.",
    price: 9.49,
    slug: "the-alchemist",
    isFeatured: true,
    isBestSeller: true,
  },
  {
    // Book 9 (The Lord of the Rings: The Fellowship of the Ring)
    bookID: 9,
    bookName: "The Lord of the Rings: The Fellowship of the Ring",
    bookCover: "/the-fellowship-of-the-ring.jpg",
    author: "J.R.R. Tolkien",
    releasedDate: 1954,
    genres: ["Fantasy", "Adventure"],
    description:
      "The first part of an epic tale of friendship, courage, and the battle against evil.",
    price: 12.99,
    slug: "the-lord-of-the-rings-fellowship-of-the-ring",
    isFeatured: true,
    isBestSeller: true,
  },
  {
    // Book 10 (The Da Vinci Code)
    bookID: 10,
    bookName: "The Da Vinci Code",
    bookCover: "/the-da-vinci-code.jpg",
    author: "Dan Brown",
    releasedDate: 2003,
    genres: ["Thriller", "Mystery"],
    description:
      "A symbologist unravels a conspiracy hidden in famous works of art.",
    price: 11.99,
    slug: "the-da-vinci-code",
    isFeatured: true,
    isBestSeller: true,
  },
  {
    // Book 11 (The Art of not Giving a F*ck)
    bookID: 11,
    bookName: "The Art of not Giving a F*ck",
    bookCover: "/the-subtle-art-of-not-giving-a-f_ck.jpg",
    author: "Mark Manson",
    releasedDate: 2016,
    genres: ["Self-Help", "Philosophy"],
    description:
      "A counterintuitive approach to living a good life, focusing on what truly matters.",
    price: 10.49,
    slug: "the-subtle-art-of-not-giving-a-f_ck",
    isFeatured: true,
    isBestSeller: true,
  },
  {
    // Book 12 (The Secret)
    bookID: 12,
    bookName: "The Secret",
    bookCover: "/the-secret.jpg",
    author: "Rhonda Byrne",
    releasedDate: 2006,
    genres: ["Self-Help", "Motivation"],
    description:
      "A guide to the law of attraction and how to manifest your desires.",
    price: 8.99,
    slug: "the-secret",
    isFeatured: true,
    isBestSeller: true,
  },
  {
    // Book 13 (The Hunger Games)
    bookID: 13,
    bookName: "The Hunger Games",
    bookCover: "/the-hunger-games.jpg",
    author: "Suzanne Collins",
    releasedDate: 2008,
    genres: ["Dystopian", "Adventure"],
    description:
      "A dystopian novel where children are forced to compete in a deadly televised game.",
    price: 10.99,
    slug: "the-hunger-games",
    isFeatured: true,
    isBestSeller: true,
  },
  {
    // Book 14 (The series of unfortunate events - The Bad Beginning)
    bookID: 14,
    bookName: "The series of unfortunate events - The Bad Beginning",
    bookCover: "/a-series-of-unfortunate-events-1-the-bad-beginning.jpg",
    author: "Lemony Snicket",
    releasedDate: 1999,
    genres: ["Adventure", "Mystery"],
    description:
      "A darkly humorous tale of three orphans and their misadventures with a villainous guardian.",
    price: 8.49,
    slug: "a-series-of-unfortunate-events-1-the-bad-beginning",
    isFeatured: true,
    isBestSeller: true,
  },
  {
    // Book 15 (The series of unfortunate events - The Reptile Room)
    bookID: 15,
    bookName: "The series of unfortunate events - The Reptile Room",
    bookCover: "/the-secret.jpg",
    author: "Lemony Snicket",
    releasedDate: 2003,
    genres: ["Adventure", "Mystery"],
    description:
      "A darkly humorous tale of three orphans and their misadventures with a villainous guardian.",
    price: 8.49,
    slug: "a-series-of-unfortunate-events-2-the-reptile-room",
    isFeatured: true,
    isBestSeller: true,
  },
  {
    bookID: 16,
    bookName: "The Secret",
    bookCover: "/the-secret.jpg",
    author: "Dan Brown",
    releasedDate: 2003,
    genres: ["Thriller", "Mystery"],
    description:
      "A symbologist unravels a conspiracy hidden in famous works of art.",
    price: 8.49,
    slug: "the-secret",
    isFeatured: true,
    isBestSeller: true,
  },
  {
    bookID: 17,
    bookName: "The Secret",
    bookCover: "/the-secret.jpg",
    author: "Dan Brown",
    releasedDate: 2003,
    genres: ["Thriller", "Mystery"],
    description:
      "A symbologist unravels a conspiracy hidden in famous works of art.",
    price: 8.49,
    slug: "the-secret",
    isFeatured: true,
    isBestSeller: true,
  },
];
