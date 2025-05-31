const routes = require("express").Router();
const { getPaymentsController } = require("../controllers/api.controllers");

routes.get("/v1/pagamentos/:cpf", getPaymentsController);
routes.use((req, resp, next) => {
    resp.end()
})

module.exports = { routes }