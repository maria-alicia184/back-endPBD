const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const app = express();
app.use(cors());

const password = process.env.PASS;
const username = process.env.USER;

mongoose.connect(
    `mongodb+srv://${username}:${password}@cluster0.plw98kj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
);

const db = mongoose.connection;

db.on("connected", () => {
    console.log("Banco de dados conectado com sucesso!");
})

db.on("error", () => {
    console.log("Erro ao conectar: ", error);
})

app.use(express.json());

require("./models/semana/segunda");
require("./models/semana/terca");
require("./models/semana/quarta");
require("./models/semana/quinta");
require("./models/semana/sexta");
require("./routes")(app);

app.listen(3000, () => {
  console.log("API rodando na porta 3000");
});