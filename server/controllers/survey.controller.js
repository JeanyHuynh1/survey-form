import Survey from '../models/survey.model.js'
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const getSurveys = async (req, res) => {
    const surveys = await Survey.find({ user_id: req.user.id });
    res.status(200).json(surveys);
}

const createSurvey = async (req, res) => {
    console.log("The request body is :", req.body);
    const { name, gender, email, semester, learningPlatform, accessOfMaterial, interactionWithInstructors, onlineTool} = req.body;
    if (!name || !email || !gender || !semester || !learningPlatform || !accessOfMaterial || !interactionWithInstructors || !onlineTool) {
      res.status(400).json({message:"All fields are mandatory !"});
    }
    const survey = await Survey.create({
      name,
      email,
      gender,
      semester,
      learningPlatform,
      accessOfMaterial,
      interactionWithInstructors,
      onlineTool,
      user_id: req.user.id,
    });
  
    res.status(201).json(survey);
}

export default {getSurveys, createSurvey}