const mongoose = require('mongoose');

const driverFeedbackSchema = new mongoose.Schema({
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

module.exports = mongoose.model('DriverFeedback', driverFeedbackSchema);