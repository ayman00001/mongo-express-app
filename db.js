import { isValidObjectId } from "mongoose";
import { Course } from "./models/Course";
import joi from "joi";

export const addCourse = async (req, res) => {
    try {
        const newCourse = new Course(req.body);
        const result = await newCourse.save();
        res.status(200).send({message:"Course was been added succsefully",data: result});
    } catch (error) {
        res.status(404).send({message:error});
    }       
}

export const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find({});
        res.status(200).send({data: courses}); 
    } catch (error) {
        res.status(404).send({message: "Error while getting data", error})
    } 
}

export const getById = async (req, res) => {
    try {
        const course = await Course.findById(req.id);
        res.status(200).send({data: course});
    } catch (error) {
        res.status(404).send({message: "Error while getting data",error})
    }
}

export const updateCourse = async (req, res) => {
    try {
        const newCourse = await Course.findByIdAndUpdate(req.id,req.body);
        res.status(200).send({message: "Course was been updated succesfully",data: newCourse});
    } catch (error) {
        res.status(404).send({message: "Error while updating course", error});
    }
}

export const deleteCourse = async(req, res) => {
    try {
        const deletedCourse = await Course.findByIdAndDelete(req.id);
        res.status(200).send({message: "Course was been deleted successfully",data: deletedCourse})
    } catch (error) {
        res.status(404).send({message: "Error while deleting course", error});
    }
}