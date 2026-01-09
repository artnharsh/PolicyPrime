const Status = require('../model/userPlanStatus');
const Plan = require('../model/plan');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

dotenv.config();

//admin login
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const isPassValid = await bcrypt.compare(
      password,
      process.env.ADMIN_PASSWORD
    );
    if (email === process.env.ADMIN_EMAIL && isPassValid) {
      const adminToken = jwt.sign(
        { email, role: "admin" },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      return res
        .status(200)
        .json({ message: "Admin login successful", token: adminToken });
    }

    return res.status(401).json({ message: "Invalid admin credentials" });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};
//show all user plan statuses
const getAllUserPlanStatuses = async (req, res) => {
    try {
        const userPlanStatuses = await Status.find().populate('plan_id');
        res.status(200).json(userPlanStatuses);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

// Approve a user's plan
const approveUserPlan = async (req, res) => {
    try {
        const { userPlanStatusId } = req.params;

        // Find the UserPlanStatus by ID
        const userPlanStatus = await Status.findById(userPlanStatusId);
        if (!userPlanStatus) {
            return res.status(404).json({ message: 'User plan status not found' });
        }
        // Update the status to 'approved'
        userPlanStatus.status = 'approved';
        await userPlanStatus.save();

        res.status(200).json({ message: 'User plan approved successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

module.exports = {
    adminLogin,
    getAllUserPlanStatuses,
    approveUserPlan
};