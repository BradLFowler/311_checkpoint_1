const express = require('express')
const app = express()
const port = process.env.PORT || 4000

const usersRout = require('./routes/users')

app.get('/', (req, res) => res.send('default route'))

app.use(usersRout)

app.listen(port, () => {
  console.log('app is listening on:', port)
})