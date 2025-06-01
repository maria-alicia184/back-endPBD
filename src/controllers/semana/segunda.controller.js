const mongoose = require("mongoose");
const SegundaFeira = mongoose.model("segunda");

exports.getDetailSegunda = async (req, res) => {
    try {
      //funcao para buscar os itens de determinado dia da semana
        const userInput = req.params.userInput;
        const query = {
                "dia_da_semana": { $regex: new RegExp(userInput, "i") }
        };
        const diaDaSemana = await SegundaFeira.find(query);
        res.json(diaDaSemana);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.getMealSegunda = async (req, res) => {
    try {
      //funcao para buscar os itens de determinada refeicao (cafe da manha ou almoco)
        const userInput = req.params.userInput;
        const query = {
                "refeicao": { $regex: new RegExp(userInput, "i") }

        };
        const refeicao = await SegundaFeira.find(query);
        res.json(refeicao);
    } catch (error) {
        res.status(500).send(error);
    }
}