import db from "../../lib/db";
import { NextApiRequest, NextApiResponse } from "next";

async function users(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const users = await db.select("*").from("Login");

      res.json(users);
    } catch (err) {
      res.status(405).json({ message: "err" });
    }
  } else {
    res.status(405).json({ message: "Endpoint only takes GET method" });
  }
}

export default users;
