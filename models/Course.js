import { connect, Schema, model } from "mongoose";

connect("mongodb://127.0.0.1:27017/db2")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err.message));



const courseSchema = new Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now()},
    isPublished: Boolean,
    price: Number,
});

const Course = model("Course", courseSchema);

export default { Course }