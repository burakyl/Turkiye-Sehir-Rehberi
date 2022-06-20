const express = require("express");

const CityCtrl = require("../controllers/city-ctrl");

const router = express.Router();




router.post("/city", CityCtrl.createCity);
router.get("/city/:id", CityCtrl.getCityById);
router.get("/cities", CityCtrl.getAllCity);
//linkleri ve hangi linkin ne yapacağını tanımladık

module.exports = router;