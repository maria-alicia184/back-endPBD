const {getDetailTerca, getMealTerca} = require('../../controllers/semana/terca.controller');

exports.tercaDetailRoutes = (app) => {
    app.get('/detalheTerca/:userInput', getDetailTerca)
}

exports.tercaMealRoutes = (app) => {
    app.get('/refeicaoTerca/:userInput', getMealTerca)
}