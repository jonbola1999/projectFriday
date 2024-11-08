const express = require('express')
const config = require('./middleware/serverConfig')
const indexRoute = require('./routes/index.routes')

const app = express()
const PORT = 3000
config(app)

app.use('/',indexRoute)

app.listen(PORT,()=>console.log(`http://localhost:${PORT}`))