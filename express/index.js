const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Routes
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html')); // sending file as result
})
app.get('/about',(req,res)=>{
    res.send("About Us") // sending text as result
})

app.listen(port,()=>{
    console.log(`Example app listening on port http//:localhost:${port}`);
})