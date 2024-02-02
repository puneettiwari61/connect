import express from "express";
import ViteExpress from "vite-express";
import mongoose from "mongoose";
import 'dotenv/config'


const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});


//connect to database
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error)
  })

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
