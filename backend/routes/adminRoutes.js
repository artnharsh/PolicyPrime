const express = require('express');
const adminAuthMiddleware = require('../middleware/adminAuthMiddleware');

const router = express.Router();

const {
  getAllUserPlanStatuses,
  approveUserPlan,
  adminLogin
} = require("../controller/adminController");

const { createPlan } = require('../controller/plansController');

//admin login route
router.post('/login', adminLogin);

// Example admin route: Get all users' plan statuses
router.get('/user-plan-statuses', adminAuthMiddleware, getAllUserPlanStatuses);

// Example admin route: Approve a user's plan
router.put('/approve-user-plan/:userPlanStatusId', adminAuthMiddleware, approveUserPlan);

//admin create plan route
router.post('/plans', adminAuthMiddleware, createPlan);

module.exports = router;