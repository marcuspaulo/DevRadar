const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

const app = express();

// server.js
const dotenv = require("dotenv");
dotenv.config();

const username_mongodb = process.env.MONGODB_USER;
const password_mongodb = process.env.MONGODB_PASSWORD;
const url_mongo_db = process.env.MONGODB_URL;
const database_mongo_db = process.env.MONGODB_DATABASE;

mongoose.connect(
  `mongodb+srv://${username_mongodb}:${password_mongodb}@${url_mongo_db}/${database_mongo_db}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// app.use(cors({ origin: "http://localhost:3000" }));
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
