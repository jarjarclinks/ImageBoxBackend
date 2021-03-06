const postsRouter = require('express').Router()
const Post = require('../models/post')



postsRouter.get('/',(request,response)=>
{
  Post
    .find({})
    .then(posts=>{
      console.log(posts)
      response.json(posts)
    })
    
})

postsRouter.post('/', (request,response)=>
{
    const newPost = new Post(request.body)
  
    newPost.save().then(result=>{
        console.log('post saved!')
        
    }) 
    console.log(newPost)
    response.json(newPost)          

})

module.exports = postsRouter