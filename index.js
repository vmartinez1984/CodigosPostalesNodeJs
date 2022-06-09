const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const conectarDB = require("./config/db");
//const cors = require('cors');
//const swaggerUi = require('swagger-ui-express');
//const swaggerDocument = require('./swagger.json');
//Creamos el servidor
const app = express();
//Conectamos a la base de datos
conectarDB();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require("./controllers/zipCodesController"));

app.listen(process.env.PORT || 3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});