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
    platform: {
        type: String,
        required: true
    },
    access: {
        type: Number,
        required: true
    },
    interaction: {
        type: Number,
        required: true
    },
    recommendations: {
        type: [String],
        required: true
    },
    comments: {
        type: String
    }
})

export default mongoose.model('Survey', surveySchema);