const express = require('express')
const  app = express()

app.get('/', (req, res) => {
    res.send('Node Dashboard')
});


app.listen(3000, ()=>{
    console.log('server running on port 3000')
})