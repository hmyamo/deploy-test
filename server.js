const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.disable('x-powered-by')

app.use(express.static('dist'))

app.get('/', (req, res) => {
  res.send('Hello Express')
})

app.listen(port, '0.0.0.0', () => {
  console.log(`server started at localhost:${port}`)
})
