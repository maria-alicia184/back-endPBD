
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tercaSchema = new Schema({
    id: { type: String },
    dia_da_semana: { type: String },
    data: { type: String },
    refeicao: { type: String },
    horario: { type: String },
    calorias_totais: { type: Number },
    tipo: { type: String },
    itens: [
                {
                    nome: { type: String },
                    categoria: { type: String },
                    restricoes_dietarias: { type: Array },
                    calorias: { type: Number }
                }
            ]
});


module.exports = mongoose.model("terca", tercaSchema);