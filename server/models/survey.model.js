import mongoose from "mongoose";

const surveySchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    semester: {
        type: Number,
        required: true
    },
    learningPlatform: {
        type: String,
        required: true
    },
    accessOfMaterial: {
        type: Number,
        required: true
    },
    interactionWithInstructors: {
        type: Number,
        required: true
    },
    onlineTool: {
        type: String,
        required: true
    },
    comments: {
        type: String
    }
})

export default mongoose.model('Survey', surveySchema);