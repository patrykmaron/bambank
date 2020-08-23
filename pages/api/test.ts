import db from "../../lib/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function Test(req: NextApiRequest, res: NextApiResponse) {
  try {
    const job = await db.select("*").from("TestLogin");

    res.json(job);
  } catch (error) {
    console.error(error);
  }
}
