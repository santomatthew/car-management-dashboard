const Car = require("../models/car");

function carPost(req, res) {
  res.status(200).render("addcar");
}

module.exports = carPost;
