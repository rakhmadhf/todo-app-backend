const express = require('express')

const Task = require('../models/Task')

const router = express.Router()

router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.findAll()

        res.json({
            ok: true,
            message: "Tasks fetched successfully",
            data: tasks
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: "Internal Server Error",
        })
        console.log(error)
    }
})

router.post('/tasks', async (req, res) => {

    try {
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
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: "Internal Server Error",
        })
        console.log(error)
    }

    
})

router.put('/tasks/:taskId', async (req, res) => {
    try {
        const selectedTask = await Task.findByPk(taskId)

        selectedTask.set({...req.body})

        selectedTask.save()

        res.json({
            ok: true,
            message: `Task id #${selectedTask.id} updated`,
            data: selectedTask
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: "Internal Server Error",
        })
        console.log(error)
    }
    
})

router.delete('/tasks/:taskId', async (req, res) => {
    try {
        const { taskId } = req.params

        const selectedTask = await Task.findByPk(taskId)

        selectedTask.destroy()

        res.json({
            ok: true,
            message: `Task id #${selectedTask.id} deleted`,
            data: {
                id: selectedTask.id
            }
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: "Internal Server Error",
        })
        console.log(error)
    }
})

module.exports = router
