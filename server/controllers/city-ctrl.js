const express = require("express");
const cors = require("cors");
const app = express();
const City = require("../models/city-models");
app.use(cors());

createCity = async (req, res) => {
  const body = req.body;
  if (!body) {
    console.log("Lütfen Verileri Doğru Girdiğinizden Emin Olun");
  }
  const city = new City(body);

  if (!city) {
    console.log("Lütfen Verileri Doğru Girdiğinizden Emin Olun");
    
  }
  city.cityId = city.cityName.replace(/ /g, "-").toLowerCase();

  city
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: city.cityId,
        message: "city created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "city not created!",
      });
    });
};
getAllCity = async (req, res) => {
  await City.find({}, (err, cities) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!cities.length) {
      return res
        .status(404)
        .json({ success: false, error: `city not found` });
    }
    return res.status(200).json({ success: true, data: cities });
  })
    .clone()
    .catch((err) => console.log(err));
};


getCityById = async (req, res) => {
  await City.findOne({ cityId: req.params.id }, async (err, city) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!city) {
      return res
        .status(404)
        .json({ success: false, error: `city not found` });
    }
    return res.status(200).json({ success: true, data: city });
  })
    .clone()
    .catch((err) => console.log(err));
};
module.exports = {
  createCity,
  getAllCity,
  getCityById
};