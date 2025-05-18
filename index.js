import express from 'express'

const app=express();
const PORT=3000;
console.log('hi');

app.get('/',(req,res)=>{
    res.send('<h1>hi</h1>')
})

app.listen(PORT,()=>{
    console.log('app running')
})