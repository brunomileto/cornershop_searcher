import { Request, Response } from "express";

export default async function handler(req: Request, res: Response) {
  const { body } = req;
  return res.send(`Hello ${body.name}, you just parsed the request body!`);
}
