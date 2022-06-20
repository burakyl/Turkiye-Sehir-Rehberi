const express = require("express");             //databasede kullanılan kütüphaneler ve girilen port burada kayıtlı
const bodyParser = require("body-parser");
const cors = require("cors");
const apiPort = 4000;

const db = require("./db");
const Router = require("./routes/router");

const app = express();

app.use(cors());
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/api", Router);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));