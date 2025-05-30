const express = require("express");
const bodyParser = require("body-parser");
const doadorRoutes = require("./routes/doadorRoutes");
const Database = require("./database/db");
const cors = require("cors");

Database._connect();

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/doador", doadorRoutes);

const port = 3000;
app.listen(port, () => console.log(`Aplicação rodando na porta ${port}`));
