const express = require('express');
const connectDB = require('./config/db');
const {shortenerurl, redirect, deleteUrl} = require('./controller/url.controller')

const app = express();
require('dotenv').config();

app.use(express.json());

connectDB();

app.get('/', (req,res)=>{
    res.send('This is backend of url-shortener'
    )
})

app.post('/testurl',shortenerurl)

app.get('/:code', redirect); 
app.delete('/:code', deleteUrl); 





const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`server is run on http://localhost:${PORT}`);
    
})


