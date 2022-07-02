import { Request, Response } from "express";
import microCors from "micro-cors";
const cors = microCors();
const main = async (req: Request, res: Response) => {
  res.json({ message: "Hello guys. Welcome to Vercel" });
};

export default cors(main);
