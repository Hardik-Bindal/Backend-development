require('dotenv').config()
const express = require('express');

const app = express()
const port = 5173

app.get('/',(req, res) => {
   res.send("Hello world")
})
app.listen(process.env.PORT, () => {
    console.log(`My first express code on port ${process.env.PORT}`)
})