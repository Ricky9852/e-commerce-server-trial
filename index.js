const express = require('express')
const cors = require('cors')
const app = express()
const configureDB = require('./config/database')
configureDB()
const routes = require('./config/routes')
const port = process.env.PORT || 3055

app.use(express.json())
app.use(cors())
app.use('/api', routes)

app.listen(port, () => {
    console.log('listening on port', port)
})