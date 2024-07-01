const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    name: String,
    email: String,
    comment: String
});

module.exports = mongoose.model("feedbacks", feedbackSchema);