//write a "Hello World" program using Express
//npm init -y
//git init
//npm install express


const http = require("http");

const express = require("express");
const app = express();
const server = http.createServer(app);
const port = 3001;

server.listen(port, 'localhost', ()=>{
    console.log("it's working")
})

app.get('/', (req, res)=>{
    res.send('Hello World')
})

app.get('/hello/:whom', (req, res) =>{
    const whom = req.params.whom;
    res.send(`Hello, ${whom}`)
})



