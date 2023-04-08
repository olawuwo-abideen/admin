const express = require('express')
const  app = express()

const connection = require('./database/db')
connection.once('open', ()=> console.log('sucessfully connected to mongo db'))
connection.on('error', ()=> console.log('the connection error is :' + error ))

app.get('/', (req, res) => {
    res.send('Node Dashboard')
});


app.listen(3000, ()=>{
    console.log('server running on port 3000')
})