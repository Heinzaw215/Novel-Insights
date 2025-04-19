import { NextApiRequest, NextApiResponse } from "next";

const reviews = [
  { id: 1, reviewer: "Alice", content: "Great book!", rating: 4.5 },
  { id: 2, reviewer: "Alice", content: "Great book!", rating: 4.5 },
  { id: 3, reviewer: "Alice", content: "Great book!", rating: 4.5 },
];


const getReviews = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    return res.status(200).json(reviews);
  }

  if (req.method === 'POST') {
    const {reviewer, content,rating} = req.body;

    if (!reviewer || !content || !rating) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newReview = {
      id: reviews.length + 1,
      reviewer,
      content,
      rating,
    };

    reviews.push(newReview);

    return res.status(201).json(newReview);
  }

  return res.status(405).json({ error: "Method not allowed." });
};

export { getReviews };
