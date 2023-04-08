const express = require('express')
const  app = express()

const connection = require('./database/db')
connection.once('open', ()=> console.log('Sucessfully connected to mongoDB'))
connection.on('error', ()=> console.log('The connection error is :' + error ))

//Require AdminBro
const AdminBro = require('admin-bro')
const expressAdminBro = require('@admin-bro/express')
const mongooseAdminBro = require('@admin-bro/mongoose')

//Require Model
const User = require('./models/User')
const Post = require('./models/Post')
const { default: mongoose } = require('mongoose')

AdminBro.registerAdapter(mongooseAdminBro)
const AdminBroOptions = {resources: [User, Post]}

const adminBro = new AdminBro(AdminBroOptions)
const router = expressAdminBro.buildRouter(adminBro)
app.use(adminBro.options.rootPath, router)


app.get('/', (req, res) => {
    res.send('Node Dashboard')
});


app.listen(3000, ()=>{
    console.log('Server running on port localhost:3000/admin')
})