import { NextApiHandler, NextApiResponse, NextApiRequest } from "next";
import { verify } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// My authentication middleware, takes function and verifys against JWT token
const authenticated = (fn: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  verify(req.cookies.auth, process.env.SECRET, async function (err, decoded) {
    if (!err && decoded) {
      return await fn(req, res);
    }

    res.status(401).json({ message: "access denied" });
  });
};

export default authenticated;
