import express from "express";
import path from "path";
import mongoose from "mongoose";
import fileUpload from "express-fileupload";
import methodOverride from "method-override";
import {
  createPhoto,
  deletePhoto,
  getAllPhotos,
  getPhoto,
  updatePhoto,
} from "./controllers/photoControllers.js";
import {
  getAboutPage,
  getAddPage,
  getEditPage,
} from "./controllers/pageController.js";

const app = express();
const __dirname = path.resolve();

mongoose.connect("mongodb://127.0.0.1:27017/pcat-test-db");

// TEMPLATE ENGINE

app.set("view engine", "ejs");

const myLogger = (req, res, next) => {
  console.log("Middle log 1");
  next();
};

// MIDDLEWARES
app.use(express.static("views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(myLogger);
app.use(fileUpload());
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

// ROUTES

app.get("/about", getAboutPage);

app.get("/add", getAddPage);

app.get("/", getAllPhotos);

app.get("/photos/:id", getPhoto);

app.post("/photos", createPhoto);

app.put("/photos/:id", updatePhoto);

app.delete("/photos/:id", deletePhoto);

app.get("/photos/edit/:id", getEditPage);

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} başlatıldı...`);
});
