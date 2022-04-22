const express = require("express");
const multer = require("multer");
const app = express();
const form = multer();
const controllers = require("./controller");

const { PORT = 8000 } = process.env;

app.set("view engine", "ejs");
app.use(express.static(`public`));

app.get("/", controllers.carGet);

app.get("/addcar", controllers.carPost);
app.get("editcar", controllers.carPut);

app.listen(PORT, () => {
  console.log(`express run on ${PORT}`);
});
