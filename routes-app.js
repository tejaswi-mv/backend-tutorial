const express = require('express');
const app = express();

const port = 3001;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/users',(req,res)=>{
    res.send({name:'John',age:30 });
});

app.post('/data',(req,res)=>{
    const receivedData = req.body;
    res.send({message:'Data received successfully', data: receivedData});
});

app.get('/about',(req,res)=>{
    res.send('This is a simple Express server application.');
});

app.post('api/data',(req,res)=>{
    const data = req.body;
    console.log('Received data:',data);
    res.send('Data received successfully');
});

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});