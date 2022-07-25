const express = require('express')
const mongoose = require("mongoose")
const config = require("config")

const app = express()
const port = config.get('serverPort')

app.get('/', (req, res) => {
    try {
        mongoose.connect(config.get("dbUrl"))
        res.send('Hellow world!!!')
    } catch(error) {

    }
})

app.listen(port, () => {
    console.log('Server started on port ', port)
})

