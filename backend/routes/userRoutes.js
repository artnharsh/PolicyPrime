const express = require("express");
const router = express.Router();
const userAuthMiddleware = require("../middleware/userAuthMiddleware");

const {
  registerUser,
  loginUser,
  getUserProfile,
  getUserPlanStatuses,
} = require("../controller/userController");

const { getAllPlans, applyForPlan } = require("../controller/plansController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", userAuthMiddleware, getUserProfile);

router.get("/plans", userAuthMiddleware, getAllPlans);
router.post("/plans/apply/:planId", userAuthMiddleware, applyForPlan);
router.get("/getmyplans", userAuthMiddleware, getUserPlanStatuses);

module.exports = router;
