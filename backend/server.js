import express from 'express'
const app = express()
// const cors = require('cors')
// const mongoose = require(mongoose)
// require ('dotenv').config()
const PORT = 7000

app.listen(PORT,()=>{
    console.log(`i am reAdy at port ${PORT}`)
})