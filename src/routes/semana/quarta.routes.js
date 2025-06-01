const {getDetailQuarta, getMealQuarta} = require('../../controllers/semana/quarta.controller');

exports.quartaDetailRoutes = (app) => {
    app.get('/detalheQuarta/:userInput', getDetailQuarta)
}

exports.quartaMealRoutes = (app) => {
    app.get('/refeicaoQuarta/:userInput', getMealQuarta)
}