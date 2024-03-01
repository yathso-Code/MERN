const { Schema, model } = require("mongoose");

const ServiceSchema = new Schema({
    service: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    }
});

const ServiceModel = model("services", ServiceSchema);

module.exports = ServiceModel;