import { NextApiRequest, NextApiResponse } from "next";

const hello = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    return res.status(200).json({ message: "Hello From the world!" });
  }
  return res.status(405).json({ error: "Method not allowed." });
};

export default hello;
