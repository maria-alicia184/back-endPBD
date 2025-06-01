const mongoose = require("mongoose");
const TercaFeira = mongoose.model("terca");

exports.getDetailTerca = async (req, res) => {
    try {
        const userInput = req.params.userInput;
        const query = {
                "dia_da_semana": { $regex: new RegExp(userInput, "i") }
        };
        const diaDaSemana = await TercaFeira.find(query);
        res.json(diaDaSemana);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.getMealTerca = async (req, res) => {
    try {
        const userInput = req.params.userInput;
        const query = {
                "refeicao": { $regex: new RegExp(userInput, "i") }
        };
        const refeicao = await TercaFeira.find(query);
        res.json(refeicao);
    } catch (error) {
        res.status(500).send(error);
    }
}