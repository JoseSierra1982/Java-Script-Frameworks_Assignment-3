import express from 'express';
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<ul>Andres Martinez</ul><ul>Jose sierra</ul><ul>Ka un</ul>')
})

app.listen(port, () => {
  console.log(`App1 Server Running on : http://localhost:${port}`)
})