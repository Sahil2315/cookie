const cookieParser = require('cookie-parser')
const express = require('express')
const app = express()

app.use(cookieParser("SECRENTAL"))

app.get('/', (req,res) => {
    res.cookie('Name', 'Bond! James Bond', { signed: true }) 
    res.send(`<a href = "/cookMe">Click Me</a>`)
})

app.get('/cookMe', (req, res) => {
    console.log(req.signedCookies.Name)
})


app.listen(5000)