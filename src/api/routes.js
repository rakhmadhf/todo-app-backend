const express = require('express')

const Task = require('../models/Task')

const router = express.Router()

router.get('/tasks', async (req, res) => {
    
    const tasks = await Task.findAll()

    res.json({
        ok: true,
        message: "Tasks fetched successfully",
        data: tasks
    })
})

router.post('/tasks', async (req, res) => {

    const { task } = req.body

    const newTask = await Task.create({
        task,
        completed: false
    })

    res.json({
        ok: true,
        message: "New task added",
        data: newTask
    })
})

router.put('/tasks/:taskId', async (req, res) => {
    const { taskId } = req.params
    const { completed } = req.body

    const selectedTask = await Task.findByPk(taskId)


    selectedTask.set({...req.body})

    selectedTask.save()

    res.json({
        ok: true,
        message: "Task updated successfully",
        data: selectedTask
    })
})

router.delete('/tasks/:taskId', async (req, res) => {

    const { taskId } = req.params

    const selectedTask = await Task.findByPk(taskId)

    selectedTask.destroy()

    res.json({
        ok: true,
        message: "Task deleted successfully",
        data: {
            id: selectedTask.id
        }
    })
})

module.exports = router
