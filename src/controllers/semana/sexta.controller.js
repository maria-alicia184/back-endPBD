const mongoose = require("mongoose");
const SextaFeira = mongoose.model("sexta");

exports.getDetailSexta = async (req, res) => {
    try {
        const userInput = req.params.userInput;
        const query = {
                "dia_da_semana": { $regex: new RegExp(userInput, "i") }
        };
        const diaDaSemana = await SextaFeira.find(query);
        res.json(diaDaSemana);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.getMealSexta = async (req, res) => {
    try {
        const userInput = req.params.userInput;
        const query = {
                "refeicao": { $regex: new RegExp(userInput, "i") }
        };
        const refeicao = await SextaFeira.find(query);
        res.json(refeicao);
    } catch (error) {
        res.status(500).send(error);
    }
}