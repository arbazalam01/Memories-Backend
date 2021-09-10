import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

import postRoutes from "./routes/posts.js";

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
const CONNECTION_URL =
  "mongodb+srv://arbazalam:arbazalam@cluster0.0grgd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 8000;

app.use("/posts", postRoutes);

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(8000, () => console.log("Server Running!!")))
  .catch((err) => console.log(err));
