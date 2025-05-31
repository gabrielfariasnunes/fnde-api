const app = require("express")();
const compression = require("compression")
const helmet = require("helmet")

const  { environments } = require("./config/env");
const { routes } = require("./routes/api.routes");

app.use(compression());
app.use(helmet())
app.use(routes)

app.listen(environments.server.port, () => {
    console.log(`Server running on port ${environments.server.port}`)
})