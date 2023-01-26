const mongoose = require('mongoose');

const commuterFeedbackSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('CommuterFeedback', commuterFeedbackSchema);