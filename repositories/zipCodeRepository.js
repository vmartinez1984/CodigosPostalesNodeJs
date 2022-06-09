const mongoose = require('mongoose');

zipCodeModel = {
    ZipCode: String,
    State: String,
    Municipality: String,
    SettementType: String,
    Settement: String
}

zipCodeSchema = new mongoose.Schema(zipCodeModel);

const zipCodeRepository = mongoose.model("ZipCode", zipCodeSchema);

module.exports = zipCodeRepository;