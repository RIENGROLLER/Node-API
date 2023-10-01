const express = require ('express');
const mongoose = require ('mongoose');
const app = express ()
//routes
app.get('/server-health',(req,res)=>{
  res.send('server is healthy!!')
});

app.get('/blog',(req,res)=>{
  res.send('hello Rose ,my name is Denyque .Iam two months old,i love you')
});

const mongodbUrl = "mongodb+srv://VJMOHA:CcCxocBLU4cZSGJb@cluster0.abihbxu.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongodbUrl).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
    console.log(error);
})

app.listen(3000 , ()=>{
  console.log('DENYQUE BELLA MY DAUGHTER')
})
