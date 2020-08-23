import db from "../../lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import dotenv from "dotenv";
import cookie from "cookie";

dotenv.config();

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
          const claims = { sub: user.id, name: user.username };
          const jwt = sign(claims, process.env.SECRET, {
            expiresIn: "1hr",
          });

          res.setHeader(
            "Set-Cookie",
            cookie.serialize("auth", jwt, {
              httpOnly: true,
              secure: process.env.NODE_ENV !== "development", // if production, use https
              sameSite: "strict",
              maxAge: 3600,
              path: "/",
            })
          );
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
