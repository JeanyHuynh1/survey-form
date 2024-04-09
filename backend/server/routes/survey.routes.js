import express from "express"
import surveyController from "../controllers/survey.controller.js"
import validateTokenHandler from "../helpers/validateTokenHandler.js";

const router = express.Router()

router.use(validateTokenHandler.validateToken);
router.route("/").get(surveyController.getSurveys).post(surveyController.createSurvey)
router.route("/:id").get(surveyController.getSurvey).delete(surveyController.deleteSurvey).put(surveyController.updateSurvey)

export default router