const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');
const User = require('../models/userModel');


// @desc Get Goals
// @route GET /api/goals
// @access private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({
        user: req.user.id
    });

    res.status(200).json(goals)
})

// @desc Post Goals
// @route POST /api/goals
// @access private
const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })
    res.status(200).json(goal)
})

// @desc Update Goals
// @route PUT /api/goals/:id
// @access private
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if(!goal) {
        res.status(400);
        throw new Error('goal not found');
    }

    const user = await User.findById(req.user.id);

    //check for user
    if(!user){
        res.status(401)
        throw new Error("User not found")
    }

    //check logged in user is same as goal author 
    if(goal.user.toString() != user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })

    res.status(200).json(updatedGoal)
})

// @desc Delete Goals
// @route DELETE /api/goals/:id
// @access private
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if(!goal) {
        res.status(400);
        throw new Error('goal not found');
    }
    const user = await User.findById(req.user.id);

    //check for user
    if(!user){
        res.status(401)
        throw new Error("User not found")
    }

    //check logged in user is same as goal author 
    if(goal.user.toString() != user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    await goal.remove()

    
    res.status(200).json({
        message: `goal with id ${req.params.id} deleted`,
        id: req.params.id
    })
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}