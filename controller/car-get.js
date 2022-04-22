const Car = require("../models/car");

function carGet(req, res) {
  res.status(200).render("listcar");
}

module.exports = carGet;
