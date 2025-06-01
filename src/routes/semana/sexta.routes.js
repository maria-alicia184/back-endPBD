const {getDetailSexta, getMealSexta} = require('../../controllers/semana/sexta.controller');

exports.sextaDetailRoutes = (app) => {
    app.get('/detalheSexta/:userInput', getDetailSexta)
}

exports.sextaMealRoutes = (app) => {
    app.get('/refeicaoSexta/:userInput', getMealSexta)
}