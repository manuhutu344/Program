const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const PostRouter = require('./router/PostRouter')
require('dotenv').config()
const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/post', PostRouter)




app.listen(process.env.SERVER_PORT, ()=>{
    console.log('jadi bang', process.env.SERVER_PORT)
})