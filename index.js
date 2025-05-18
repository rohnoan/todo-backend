import express from 'express'
import mongoose from 'mongoose'

const app=express();
const PORT=3000;

//auth
app.post('/api/v1/auth/sign-up',(req,res)=>{
    res.send('signup')
})
app.post('/api/v1/auth/sign-in',(req,res)=>{
    res.send('signin')
})
app.post('/api/v1/auth/sign-out',(req,res)=>{
    res.send('singout')
})

//users
app.get('/api/v1/users',(req,res)=>{
    res.send('all users')
})
app.get('/api/v1/users/:id',(req,res)=>{
    res.send('one user')
})
app.post('/api/v1/users',(req,res)=>{
    res.send('create user')
})
app.put('/api/v1/users/:id',(req,res)=>{
    res.send('update one user')
})
app.delete('/api/v1/users/:id',(req,res)=>{
    res.send('delete user')
})

//todo
app.get('/api/v1/todos/',(req,res)=>{
    res.send('all todos')
})
app.get('/api/v1/todos/:id',(req,res)=>{
    res.send('todo')
})
app.post('/api/v1/todos/',(req,res)=>{
    res.send('create todo')
})
app.put('/api/v1/todos/:id',(req,res)=>{
    res.send('update')
})
app.delete('/api/v1/todos/:id',(req,res)=>{
    res.send('delete')
})

app.get('/',(req,res)=>{
    res.send('rohans todo')
})

app.listen(PORT,()=>{
    console.log(`app running on PORT : ${PORT}`)
})