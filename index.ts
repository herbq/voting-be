import express from "express";
import cors from 'cors';
import botRoute from './src/routes/bot.route';
import profileRoute from './src/routes/profile.route';
import mongoose from "mongoose";

const app = express();

app.use(express.json())
app.use(cors())


const port = process.env.PORT || 8000;

app.use(`/bot`, botRoute);
app.use(`/profile`, profileRoute);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://127.0.0.1:${port}`);
  try {
    test();
  } catch {
    console.log(`Error while running test() function.`)
  }
  dbConnect();
});

const dbConnect = () => {
  console.log("🤖 [server]: Connecting to db...");
  mongoose.connect("mongodb://127.0.0.1:27017/chatbot")
    .then(async () => {
      console.log(`🤖 [server]: Connected to MongoDB`);
    })
    .catch((err) => {
      console.log(`🤖 [server]: Failed to connect to mongodb ${err}`);
    });
}

const test = async () => {
  const li_at = `AQEDAUJdX7sAzGX2AAABh1idEO0AAAGHfKmU7VYAB5YkSh6SrlW9PCTqYY9KcM2THJxRqM1AK9Py3f1cTXO77ytCwibCbi-K-vMvTvSiMbP-GcJLSwUmTVtJwUzL99ChJfvMvws8YY-heW64ROxd8AcN`;
  try {
    // const response = await sendMessage(
    //   li_at,
    //   await getPublicID(`https://www.linkedin.com/in/omar-undefined-8a3a69270/`, li_at),
    //   await getPublicID(`https://www.linkedin.com/in/omar-herbawi-6468aa21a/`, li_at));
    // if (response != null) {
    //   // console.log({ data: response.data, status: response.status });
    // }

    // const publicIDResponse = await getPublicID(`https://www.linkedin.com/in/omar-herbawi-6468aa21a/`, li_at);
    // console.log({ publicIDResponse });

    // console.log(`conversationResponse`);
    // const conversationResponse = await getConversationData(li_at);
    // console.log({ data: conversationResponse.data, status: conversationResponse.status });

  } catch {
    console.log(`An error occurred while sending the message`)
  }
}
