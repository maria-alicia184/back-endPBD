const {getDetailQuinta, getMealQuinta} = require('../../controllers/semana/quinta.controller');

exports.quintaDetailRoutes = (app) => {
    app.get('/detalheQuinta/:userInput', getDetailQuinta)
}

exports.quintaMealRoutes = (app) => {
    app.get('/refeicaoQuinta/:userInput', getMealQuinta)
}