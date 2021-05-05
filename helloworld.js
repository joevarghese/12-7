const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);

const port = 3001;

server.listen(port, 'localhost',()=>{
    console.log('its working')
} )

const es6Renderer = require('express-es6-template-engine')
app.engine('html', es6Renderer);
app.set('views','templates');
app.set('view engine','html');


app.get('/', (req,res)=>{
    res.send('hello world ');
})