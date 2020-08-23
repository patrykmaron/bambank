import db from "../../lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import authenticated from "../../lib/authenticated";
import { verify } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

async function profile(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const decoded = verify(req.cookies.auth, process.env.SECRET);
      const me = await db
        .select("*")
        .from("Logins")
        .where({
          username: decoded.name,
        })
        .then(function (account) {
          return db
            .select("*")
            .from("Accounts")
            .where({ id: account[0].accountid });
        });
      res.json(me);
    } catch (err) {
      res.status(405).json({ message: "err" });
    }
  } else {
    res.status(405).json({ message: "Endpoint only takes GET method" });
  }
}

export default authenticated(profile);
