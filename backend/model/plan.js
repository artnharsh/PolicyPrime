const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        enum: ['Basic', 'Standard', 'Premium'],
        required: true,
    },
}, { timestamps: true });   

const Plan = mongoose.model('Plan', planSchema);

module.exports = Plan;