import jwt, { decode } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      console.log("authorization failed");
      return res
        .status(401)
        .json({ error: "no token fount , authorization failed" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ error: "no token fount , authorization failed" });
    }
    //     console.log(token,'******',process.env.JWT_SECRET,'-----------')
    //     const decode = jwt.decode(token);
    // console.log("Decoded token:", decode);
    //     // const decode = jwt.verify(token, process.env.JWT_SECRET);
    //     console.log("five")
    //     console.log(decode,';;;;;;;;;;;;;;;;;')
    //     req.userId = decode.userId;
    //     next();

    const decode = jwt.decode(token);
    req.userId = decode.id;
    next();
  } catch (error) {
    return res.status(401).json({ error: "token is invalid" });
  }
};
export default authMiddleware;
