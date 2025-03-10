require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res) => {
  res.send('HELLO WORLD')
})

app.get('/twitter', (req, res) => {
  res.send('sonu')
})

app.get('/login', (req, res) => {
  res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube', (req, res) => {
  res.send("<h2> Chai aur Code </h2>")
})

app.get('/sonu' , (req, res) => {
   res.send("I am Sonu")
})

app.listen(process.env.PORT, ()=>{
  console.log(`Example app is listening on port ${port}`)
})

