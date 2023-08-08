import mongoose from "mongoose";

const Schema = mongoose.Schema;

// CONNECT DB
mongoose.connect("mongodb://127.0.0.1:27017/pcat-test-db");

// CREATE SCHEMA

const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model("Photo", PhotoSchema);

// CREATE PHOTO

// Photo.create({
//   title: "P Title 1",
//   description: "P desc 1",
// });

// READ PHOTO

// async function readData() {
//   try {
//     const data = await Photo.find({});
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }
// }
// readData();

// UPDATE PHOTO

const id = "64ba5b3252b0bfebfcd2aac7";

// const updatePhoto = {
//   title: "P Title new",
//   description: "P Title desc",
// };

// await Photo.findByIdAndUpdate(id, updatePhoto);


// DELETE PHOTO 

await Photo.findByIdAndDelete(id);
