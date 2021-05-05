//write a "Hello World" program using Express
//npm init -y
//git init
//npm install express
//npm i express-es6-template-engine --save 
//npm install -g nodemon


const http = require("http");

const express = require("express");
const app = express();
const server = http.createServer(app);
const port = 3001;

const es6Renderer = require('express-es6-template-engine')
app.engine('html', es6Renderer);
app.set('views','templates');
app.set('view engine','html');

server.listen(port, 'localhost', ()=>{
    console.log("it's working")
})

app.get('/', (req, res)=>{
    res.render('home');
})

app.get('/test',(req,res)=>{

})

const topics = {
    node: 'node.js is Javascript for the command line,'
};


app.get('/:topic', (req,res)=>{
    const topic = req.params.topicName
    res.render('details',{
        locals:{
            topic,
            defintion: topics[topic]
        }
    })
})



