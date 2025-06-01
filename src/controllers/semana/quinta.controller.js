const mongoose = require("mongoose");
const QuintaFeira = mongoose.model("quinta");

exports.getDetailQuinta = async (req, res) => {
    try {
        const userInput = req.params.userInput;
        const query = {
                "dia_da_semana": { $regex: new RegExp(userInput, "i") }
        };
        const diaDaSemana = await QuintaFeira.find(query);
        res.json(diaDaSemana);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.getMealQuinta = async (req, res) => {
    try {
        const userInput = req.params.userInput;
        const query = {
                "refeicao": { $regex: new RegExp(userInput, "i") }
        };
        const refeicao = await QuintaFeira.find(query);
        res.json(refeicao);
    } catch (error) {
        res.status(500).send(error);
    }
}