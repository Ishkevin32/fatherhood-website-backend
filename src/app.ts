import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";

const cors = require("cors");

const app = express();

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: ["http://localhost:3000"],
};
app.use(cors(corsOptions));

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).end();
});

app.listen(3001);
