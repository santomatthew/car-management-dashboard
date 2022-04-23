const { Cars } = require("../models");

async function carDelete(req, res) {
  let idFromParams = req.params.id;
  let car = await Cars.findAll();

  let array = [];
  for (let i in car) {
    if (idFromParams == car[i].id) {
      array.push(car[i].id);
    }
  }

  if (array.length == 0) {
    res.json(`Data ${idFromParams} tidak ada`);
  } else {
    await Cars.destroy({ where: { id: idFromParams } });
    res.json(`Data ${req.params.id} berhasil di hapus`);
  }
}

module.exports = carDelete;
