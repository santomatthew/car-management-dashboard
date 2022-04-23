function form(req, res) {
  let id = req.params.id;
  let title = "Add Car";
  if (id) {
    title = "Update Car Information";
  }

  res.status(200).render("form", { title: title, id: id });
}

module.exports = form;
