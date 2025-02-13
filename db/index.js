const mongoose = require("mongoose");

mongoose
    .connect("mongodb://127.0.0.1:27017/db2")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err.message));


const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now()},
    isPublished: Boolean,
    price: Number,
});

const Course = mongoose.model("Course", courseSchema);

const addCourse = async () => {
    const course = new Course({
        name: "Maitriser php && MySql",
        author: "Jeff",
        tags: ['php', 'backend', 'sql'],
        price: 55,
        isPublished: true,
    });
    const result = await course.save();
    console.log(result);
}