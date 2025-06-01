const {getDetailSegunda, getMealSegunda} = require('../../controllers/semana/segunda.controller');

exports.segundaDetailRoutes = (app) => {
    app.get('/detalheSegunda/:userInput', getDetailSegunda)
}

exports.segundaMealRoutes = (app) => {
    app.get('/refeicaoSegunda/:userInput', getMealSegunda)
}