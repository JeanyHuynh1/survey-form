import Survey from '../models/survey.model.js'
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const getSurveys = async (req, res) => {
    const surveys = await Survey.find({ user_id: req.user.id });
    res.status(200).json(surveys);
}

const createSurvey = async (req, res) => {
    console.log("The request body is :", req.body);
    const { name, gender, email, platform, access, interaction, recommendations, comments} = req.body;
    if (!name || !email || !gender || !platform || !access || !interaction || !recommendations) {
      res.status(400).json({message:"All fields are mandatory !"});
    }
    const survey = await Survey.create({
      name,
      email,
      gender,
      platform,
      access,
      interaction,
      recommendations,
      comments,
      user_id: req.user.id,
    });
  
    res.status(201).json(survey);
}

const getSurvey = async (req, res) => {
    const survey = await Survey.findById(req.params.id);
    if (!survey) {
      return res.status(404).json({message:"Survey not found"});
    }
    return res.status(200).json(survey);
 }

 const deleteSurvey = async (req, res) => {
    const survey = await Survey.findById(req.params.id);
    if (!survey) {
      res.status(404).json({message:"Survey not found"});
    }
    if (survey.user_id.toString() !== req.user.id) {
      res.status(403).json({message:"User don't have permission to update other user surveys"});
    }
    await Survey.deleteOne({ _id: req.params.id });
    res.status(200).json(survey);
  }

  const updateSurvey = async (req, res) => {
    const survey = await Survey.findById(req.params.id);
    if (!survey) {
      res.status(404).json({message:"Survey not found"});
    }
  
    if (survey.user_id.toString() !== req.user.id) {
      res.status(403).json({message:"User don't have permission to update other user surveys"});
    }
  
    const updatedSurvey = await Survey.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
  
    res.status(200).json(updatedSurvey);
  }
export default {getSurveys, createSurvey, getSurvey, deleteSurvey, updateSurvey}