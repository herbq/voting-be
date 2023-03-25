import express from "express";
import mongoose from 'mongoose';
import { generateKeys } from "./src/services/subtle/rsa.service";

import userRouter from "./src/routes/user.route";
import electionRouter from "./src/routes/election.route";
import cors from 'cors';

const app = express();

app.use(express.json())
app.use(cors())

app.use('/api', (req, res, next) => {
  res.json({"resultwww45": "success"});
});

app.use(`/user`, userRouter);
app.use(`/election`, electionRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://127.0.0.1:${port}`);
  dbConnect();
});

const dbConnect = () => {
  console.log("connecting to db...");
  mongoose.connect("mongodb://127.0.0.1:27017/voting")
    .then(async () => {
      console.log(`🤗 [server]: Connected to MongoDB`);
    })
    .catch((err) => {
      console.log(`🤨 [server]: Failed to connect to mongodb ${err}`);
    });
}