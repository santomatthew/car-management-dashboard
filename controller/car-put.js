const Car = require("../models/car");

function carPut(req, res) {
  res.status(200).render("editcar");
}

module.exports = carPut;
