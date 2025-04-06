
import { addCourse, getAllCourses, getById, updateCourse, deleteCourse } from './db';

app.get("/courses", getAllCourses());

app.get("/courses/:id", getById());

app.post("/courses", addCourse());

app.put("/courses/:id", updateCourse());

app.delete("/api/courses/:id", deleteCourse());