require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const middleware = require('./utils/middleware')
app.use(cors())
const logger = require('./utils/logger')
app.use(express.json())
const mongoose = require('mongoose')
const postsRouter = require('./controllers/posts')

// let memes = [
//     {
//         picture : "https://i.pinimg.com/originals/0e/8b/7d/0e8b7d2c53195177a326670609fcb7ea.jpg",
//         caption : "No bad spidermen memes please",
//      //   id: 0
//     },
//     {
//         picture : "https://i.pinimg.com/originals/0e/8b/7d/0e8b7d2c53195177a326670609fcb7ea.jpg",
//         caption : "No good spidermen memes please",
//       //  id: 1
//     }


// ]



const url = process.env.MONGODB_URI
console.log('connecting to ', url)  

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(()=>{
    logger.info('connected to MongoDB')
  })
  .catch((error)=>{
    logger.error('error connecting to MongoDB:',error.message)
  })

app.use(middleware.requestLogger)  

app.use('/api/posts',postsRouter)

app.use(middleware.unknownEndpoint)

app.use(middleware.errorHandler)

const PORT = process.env.PORT
app.listen(PORT, ()=>
{
  
    console.log(`Server running on port ${PORT}`)
})