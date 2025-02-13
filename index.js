const express = require("express");
//validation package
const joi = require("joi");
const app = express();

app.use(express.json());

const courses = [
    { id: 1, name: "course1"},
    { id: 2, name: "course2"},
    { id: 3, name: "course3"}
];

app.get("/", (req, res) => {
    res.send("Hello express");
});

app.get("/api/courses", (req, res) => {
    res.send(courses);
})

app.get("/api/courses/:id", (req, res) => {
    const { id } = req.params;

    const course = courses.find((course) => course.id === parseInt(id));

    if(!course) {
        return res.status(404).send("Course not found");
    }
    res.send(course);
});

app.post("/api/courses", (req, res) => {
    const { name } = req.body;
    const course = { id: courses.length + 1, name};
    courses.push(course);
    res.send(course);
});

app.put("/api/courses/:id", (req, res) => {
    const { id } = req.params;

    const course = courses.find((course) => course.id === parseInt(id));

    if(!course) {
        return res.status(404).send("Course not found");
    }
    course.name = req.body.name;
    res.send(course);
});

app.delete("/api/courses/:id", (req, res) => {
    const { id } = req.params;

    const course = courses.find((course) => course.id === parseInt(id));

    if(!course) {
        return res.status(404).send("Course not found");
    }
    const index = courses.indexOf(course)
    courses.splice(index, 1);
    res.send({"message": "course was been deleted succesfuly", "course": course });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});