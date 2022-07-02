import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { app } from "./app";

dotenv.config();
const port = process.env.PORT;
console.log(port);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
