const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })



app.post('/like', (req, res) => {
    var user = req.body.userEmail;
    var user2 = req.body.user2Email;

    // Save this like into Dynamo DB

    // Run a lambda function to check connections
})

app.get('/wallUser', (req, res) => {
    var user = req.query.email;

    // Extract all users except this user from RDS
})

app.get('/connections', (req, res) => {
    var user = req.query.email;

    // Extract all connections for this user from Dynamo DB
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})