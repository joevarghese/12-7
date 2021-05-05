const http = require('http');
const express = require('express')
const app = express();
const server = http.createServer(app);
const port = 3001;

server.listen(port,'localhost',()=>{
    console.log('its working just fine')
})

app.get('/', (req,res)=>{
    res.send('Hello World')
})

app.get('/hello', (req,res)=>{
    res.send('Hello, You')
})

app.get('/hello/:name',(req,res)=>{
    const name = req.params.name;
    res.send(`Hello, ${name}`)

})

