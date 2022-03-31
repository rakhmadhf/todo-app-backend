const express = require('express')
const {nanoid} = require('nanoid')

const router = express.Router()

let listOfTasks = []

router.get('/tasks', (req, res) => {
    res.json({
        ok: true,
        message: "Tasks fetched successfully",
        data: listOfTasks
    })
})

router.post('/tasks', (req, res) => {
    const data = {
        id: nanoid(16),
        task: req.body.task,
        completed: false,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    }
    listOfTasks.push(data)
    res.json({
        ok: true,
        message: "New task added",
        data
    })
})

router.put('/tasks/:taskId', (req, res) => {
    const { completed } = req.body
    const selectedIndex = listOfTasks.findIndex((task => task.id == req.params.taskId))
    const newUpdatedDate = new Date().toISOString()
    listOfTasks[selectedIndex].completed = completed
    listOfTasks[selectedIndex].updated_at = newUpdatedDate

    res.json({
        ok: true,
        message: "Task updated successfully",
        data: listOfTasks[selectedIndex]
    })
})

router.delete('/tasks/:taskId', (req, res) => {
    const selectedIndex = listOfTasks.findIndex((task => task.id == req.params.taskId))

    listOfTasks.splice(selectedIndex, 1)

    res.json({
        ok: true,
        message: "Task deleted successfully"
    })
})

module.exports = router
