import db from "../../lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import { hash } from "bcrypt";

export default async function signup(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      // Hashing the password using Bcrypt with seed of 10 (around 12 years to crack, 1 second to create)
      hash(req.body.password, 10, async function (err, hash) {
        // await db
        //   .insert({ username: req.body.username, password: hash })
        //   .into("Logins");

        // res.json({ message: "You have registered!" });

        // Using transaction to populate two tables, and connect them using foreign key.
        // sql transactions help with data integrity, and if one table fails to populate,
        // entire transaction is rolled back.
        await db
          .transaction(function (t) {
            return db("Accounts")
              .transacting(t)
              .insert({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
              })
              .returning("id")
              .then(function (id) {
                return db("Logins")
                  .transacting(t)
                  .insert({
                    username: req.body.username,
                    password: hash,
                    accountid: id[0],
                  })
                  .then(t.commit)
                  .catch(t.rollback);
              });
          })
          .then(function () {
            res.json({ message: "You have registered!" });
          })
          .catch(function (err) {
            console.log(err);
            res.json({ message: "Error occured!" });
          });
      });
    } catch (error) {
      console.error(error);
      res.status(405).json({ message: "failed register!" });
    }
  } else {
    res.status(405).json({ message: "Endpoint only takes Post method" });
  }
}
