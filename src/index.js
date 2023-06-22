const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     res.status(503).send("Site under maintanence.")
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port,() => {
    console.log('Server running on port 3000')
})

// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('6492e3d546cacb3354aed5f3')
//     // await task.populate('owner')
//     // console.log(task.owner)

//     const user = await User.findById('6492e3b946cacb3354aed5e8')
//     await user.populate('tasks')
//     console.log(user.tasks)
// }

// main()