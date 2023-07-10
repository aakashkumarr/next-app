const express = require('express')
const app = express()
const server =require('http').Server(app)
const next = require('next')
const dev = process.env.NODE_ENV!='production'
const nextApp = next({dev})
const handle = nextApp.getRequestHandler()
let port = process.env.port || 3000
const helloApi = require('./api/hello')

nextApp.prepare().then(()=>{
app.use(express.json())
app.use('/api',helloApi)
  app.all('*',(req,res)=>handle(req,res))
  
  server.listen(3000,()=>{
    console.log('NextApp is running on '+port)
  })
})