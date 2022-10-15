const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');


// @desc Get Goals
// @route GET /api/goals
// @access private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find();

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
        text: req.body.text
    })
    res.status(200).json(goal)
})

// @desc Update Goals
// @route PUT /api/goals/:id
// @access private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "update goal"
    })
})

// @desc Delete Goals
// @route DELETE /api/goals/:id
// @access private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "delete goal"
    })
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}