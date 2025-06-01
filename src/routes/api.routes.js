const routes = require("express").Router();
const { getPaymentsController } = require("#controllers");

routes.get("/api/pagamentos/:cpf", getPaymentsController);
routes.use((req, resp, next) => {
    resp.end()
})

module.exports = { routes }