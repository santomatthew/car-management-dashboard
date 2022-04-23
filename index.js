const express = require("express");
const multer = require("multer");
const app = express();
const form = multer({ dest: "upload" });
const controllers = require("./controller");

const { PORT = 8000 } = process.env;

app.set("view engine", "ejs");
app.use(express.static(`public`));
app.use(express.static(`upload`));
app.use(express.json());

app.get("/", controllers.carGet);

// app.get("/addcar", controllers.carPost);
// app.get("/editcar", controllers.carPut);

// Home
// app.get("/", controllers.carGet);
app.get("/form", controllers.form);
app.get("/form/:id", controllers.form);
app.get("/api/v1/cars/:id", controllers.carGetById);
// Get All
app.get("/api/v1/cars", controllers.carGetAll);
// Post
app.post("/api/v1/cars", controllers.carPost);
app.post(
  "/api/v1/cars-upload",
  form.single("attachment"),
  controllers.carUpload
);
// Update
app.put("/api/v1/cars/:id", controllers.carPut);
// Delete
app.delete("/api/v1/cars/:id", controllers.carDelete);

app.listen(PORT, () => {
  console.log(`express run on ${PORT}`);
});
