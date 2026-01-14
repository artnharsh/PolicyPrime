const Plan = require('../model/plan');
const Status = require('../model/userPlanStatus');

const createPlan = async (req, res) => {
    try {
      const { name, description, price, type } = req.body;
  
      // Check if a plan with the same name exists
      const existingPlan = await Plan.findOne({ name });
      if (existingPlan) {
        return res.status(400).json({ message: "Plan with this name already exists" });
      }
  
      // Create new plan
      const plan = new Plan({ name, description, price, type });
      await plan.save();
  
      res.status(201).json({ message: "Plan created successfully", plan });
    } catch (error) {
      console.error("Error creating plan:", error);
      res.status(500).json({ message: error.message });
    }
  };

const getAllPlans = async (req, res) => {
    try {
        const plans = await Plan.find({});
        if(plans.length === 0){
            return res.status(404).json({message: "No plans found"});
        }
        res.status(200).json(plans);
    }catch (error) {
        res.status(500).json({message: "Internal server error"});
    }
}

const applyForPlan = async (req, res) => {
    try {
        const planId = req.params.planId;
        const plan = await Plan.findById(planId);
        if(!plan){
            return res.status(404).json({message: "Plan not found"});
        }
        // Logic to apply for the plan goes here
        const status = new Status({
            userId: req.userId,
            plan_id: planId,
        });
        await status.save();
        res.status(200).json({message: "Applied for plan successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    createPlan,
    getAllPlans,
    applyForPlan
};