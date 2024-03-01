const ServiceModel = require('../models/service_model');

const service = async (req, resp) => {
    try {
        const result = await ServiceModel.find();
        resp.json(result);
    } catch (error) {
        resp.json({ message: "data is not found" });
    }
}

module.exports = service;