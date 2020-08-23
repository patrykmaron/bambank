import db from "../../lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import { hash } from "bcrypt";
import authenticated from "../../lib/authenticated";
import { verify } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

async function send(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      hash(req.body.password, 10, async function (err, hash) {
        const decoded = verify(req.cookies.auth, process.env.SECRET);
        await db //This is a big transaction chain, we increment the money in one account, decrement in another.
          .transaction(function (t) {
            return db("Logins")
              .transacting(t)
              .where({
                username: req.body.username,
              })
              .then(function (response) {
                return db("Accounts")
                  .transacting(t)
                  .where({ id: response[0].accountid })
                  .increment("balance", req.body.balance);
                // .then(t.commit)
                // .catch(t.rollback);
              })
              .then(function (response) {
                return db("Logins")
                  .transacting(t)
                  .where({ username: decoded.name });
              })
              .then(function (response) {
                return db("Accounts")
                  .transacting(t)
                  .where({ id: response[0].accountid })
                  .decrement("balance", req.body.balance)
                  .then(t.commit)
                  .catch(t.rollback);
              });
          })
          .then(function () {
            res.status(200).json({ message: "You have sent money!" });
          })
          .catch(function (err) {
            console.log(err);
            res.json({ message: "Error occured!" });
          });
      });
    } catch (error) {
      console.error(error);
      res.status(405).json({ message: "failed money send!" });
    }
  } else {
    res.status(405).json({ message: "Endpoint only takes Post method" });
  }
}

export default authenticated(send);
