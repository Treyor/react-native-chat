const express = require('express')
const mongoose = require('mongoose')
const config = require('../config/default.json')

const app = express()

app.use('/api/auth', require('../routes/auth-routes'))

const PORT = config.port

async function start() {
    try {
        await mongoose.connect(config.mongoURI)
        app.listen(PORT, () => console.log(`App has been started on ${PORT}`))
    } catch (e) {
        console.log('Server error', e.message)
        process.exit(1)
    }
}

start()