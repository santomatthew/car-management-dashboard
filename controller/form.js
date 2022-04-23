const { Cars } = require("../models");
async function form(req, res) {
  let id = req.params.id;
  let decider = false;
  let realcar;
  if (id) {
    let car = await Cars.findOne({ where: { id: id } });
    realcar = car;
    decider = true;
  } else {
    decider = false;
  }

  let title = "Add Car";
  let name, price, size_id;
  if (decider) {
    title = "Update Car Information";
    name = realcar.name;
    price = realcar.price;
    size_id = realcar.size_id;
  }

  res.status(200).render("form", {
    title: title,
    id: id,
    name: name,
    price: price,
    size_id: size_id,
  });
}

module.exports = form;
