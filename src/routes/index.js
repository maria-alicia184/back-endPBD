const { segundaDetailRoutes, segundaMealRoutes } = require("./semana/segunda.routes");
const { tercaDetailRoutes, tercaMealRoutes } = require("./semana/terca.routes");
const { quartaDetailRoutes, quartaMealRoutes } = require("./semana/quarta.routes");
const { quintaDetailRoutes, quintaMealRoutes } = require("./semana/quinta.routes");
const { sextaDetailRoutes, sextaMealRoutes } = require("./semana/sexta.routes");

module.exports = (app) => {
  segundaDetailRoutes(app);
  segundaMealRoutes(app);
  tercaDetailRoutes(app);
  tercaMealRoutes(app);
  quartaDetailRoutes(app);
  quartaMealRoutes(app);
  quintaDetailRoutes(app);
  quintaMealRoutes(app);
  sextaDetailRoutes(app);
  sextaMealRoutes(app);
};
