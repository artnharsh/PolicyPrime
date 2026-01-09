const mongoose = require('mongoose');

const userPlanStatusSchema = new mongoose.Schema({
    plan_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Plan'
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'approved', 'pending'],
        default: 'pending',
        required: true
    }
});

const Status = mongoose.model('UserPlanStatus', userPlanStatusSchema);

module.exports = Status;
