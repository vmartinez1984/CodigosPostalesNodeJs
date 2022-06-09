const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router();
const zipCodeRepository = require("../repositories/zipCodeRepository");
project = { _id: 0, Id: 0, City: 0 };

router.get("/api/codigosPostales/estados/:estado/alcaldias/:alcaldia", async (req, res) => {
    try {
        zipCodeModel = {
            ZipCode: String,
            State: String,
            Municipality: String,
            SettementType: String,
            Settement: String
        }
        list = await zipCodeRepository.find({ State: req.params.estado, Municipality: req.params.alcaldia }, project);
        //console.log(list);
        res.status(200).json(list)
    } catch (error) {
        console.log(error);
        res.status(500).send("Ocurrio un error");
    }
});

router.get("/api/codigosPostales/estados/:estado/alcaldias", async (req, res) => {
    try {
        list = await zipCodeRepository.find({ State: req.params.estado }).distinct("Municipality");
        //console.log(list);
        res.status(200).json(list)
    } catch (error) {
        console.log(error);
        res.status(500).send("Ocurrio un error");
    }
});

router.get("/api/codigosPostales/estados", async (req, res) => {
    try {
        list = await zipCodeRepository.distinct("State");
        //console.log(list);
        res.status(200).json(list)
    } catch (error) {
        console.log(error);
        res.status(500).send("Ocurrio un error");
    }
});

router.get("/api/codigosPostales/:codigoPostal", async (req, res) => {
    try {
        const codigoPostal = req.params.codigoPostal;
        console.log(codigoPostal)
        list = await zipCodeRepository.find({ ZipCode: codigoPostal }, project);
        //console.log(list);
        res.status(200).json(list)
    } catch (error) {
        console.log(error);
        res.status(500).send("Ocurrio un error");
    }
});

module.exports = router;