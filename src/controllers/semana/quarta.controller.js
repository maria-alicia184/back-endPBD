const mongoose = require("mongoose");
const QuartaFeira = mongoose.model("quarta");

exports.getDetailQuarta = async (req, res) => {
    try {
        const userInput = req.params.userInput;
        const query = {
                "dia_da_semana": { $regex: new RegExp(userInput, "i") }
        };
        const diaDaSemana = await QuartaFeira.find(query);
        res.json(diaDaSemana);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.getMealQuarta = async (req, res) => {
    try {
        const userInput = req.params.userInput;
        const query = {
                "refeicao": { $regex: new RegExp(userInput, "i") }
        };
        const refeicao = await QuartaFeira.find(query);
        res.json(refeicao);
    } catch (error) {
        res.status(500).send(error);
    }
}