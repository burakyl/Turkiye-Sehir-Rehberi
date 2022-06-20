const mongoose = require("mongoose");
const Schema = mongoose.Schema;
                                          //kaydedilecek verilerin veritipini ve türünü tanımladığımız şema
const City = new Schema({
  cityName: {
    unique: true,
    type: String,
    required: true,
  },
  cityImg: {
    type: String,
    unique: true,
  },
  cityInfo: {
    type: String,
    required: true,
  },
  cityId: {
    type: String,
  },
  city1Title: {
    type: String,
  },
  city1: {
    type: String,
  },
  city2Title: {
    type: String,
  },
  city2: {
    type: String,
  },
  city3Title: {
    type: String,
  },
  city3: {
    type: String,
  },
  city4Title: {
    type: String,
  },
  city4: {
    type: String,
  },
  city5Title: {
    type: String,
  },
  city5: {
    type: String,
  },
  city6Title: {
    type: String,
  },
  city6: {
    type: String,
  },
  city7Title: {
    type: String,
  },
  city7: {
    type: String,
  },
  city8Title: {
    type: String,
  },
  city8: {
    type: String,
  },
  city9Title: {
    type: String,
  },
  city9: {
    type: String,
  },
  city10Title: {
    type: String,
  },
  city10: {
    type: String,
  },
  city11Title: {
    type: String,
  },
  city11: {
    type: String,
  },
  city12Title: {
    type: String,
  },
  city12: {
    type: String,
  },
  city13Title: {
    type: String,
  },
  city13: {
    type: String,
  },
  city14Title: {
    type: String,
  },
  city14: {
    type: String,
  },
  city15Title: {
    type: String,
  },
  city15: {
    type: String,
  },
});
//Alınacak verilerin şemasını oluşturduk

module.exports = mongoose.model("cities", City);
