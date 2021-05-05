const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app)

const port = 3001;

const es6Renderer = require('express-es6-template-engine')
app.engine('html', es6Renderer);
app.set('views','templates');
app.set('view engine','html');

server.listen(port, 'localhost', ()=>{
    console.log('its working')
})

app.get('/',(req,res)=>{
    res.send('hello World'); //write text
})

app.get('/home/:test',(req,res)=>{
    const test = req.params.test;
    res.send(`Hello, ${test}`)
})