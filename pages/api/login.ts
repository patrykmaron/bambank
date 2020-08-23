import db from "../../lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import { compare } from "bcrypt";

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const user = await db
        .select("*")
        .from("Logins")
        .where({ username: req.body.username })
        .then((row) => row[0]); // Without this it returns me an object within an Array (can also use ".first()" instead.)

      compare(req.body.password, user.password, function (err, result) {
        if (!err && result) {
          res.status(200).json({ message: "Welcome back!" });
        } else {
          res.json({ message: "oops, something went wrong!" });
        }
      });
    } catch (err) {
      console.error(err);
      res.status(405).json({ message: "Incorrect credentials!" });
    }
  } else {
    res.status(405).json({ message: "Endpoint only takes Post method" });
  }
}
