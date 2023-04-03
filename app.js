//EXPRESS APP
const express = require('express') // return a fun

const app = express();

app.listen(3000,()=>{
    console.log('Listening on Port');
})

app.get('/',(req,res)=>{
    res.sendFile('./index.html',{root : __dirname})
})

app.get('/about',(req,res)=>{
    res.sendFile('./about.html',{root : __dirname})
})
app.use((req,res)=>{
   res.status(404).sendFile('./error.html',{root : __dirname})
}) //FIRE WHEN REACH THIS STATEMENT