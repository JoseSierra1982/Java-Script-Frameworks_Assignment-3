//minimal and flexible Node.js web framework used to build web servers and APIs
import express from 'express'
//required in ES modules (ESM) to explicitly tell Node.js that you're importing a JSON file
import data from './data/topVisit.json' with {type : 'json'}

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('welcome visiting Canada !');
})

//Get

app.get('/visit', (req, res) => {
  res.json(data);
})

//Create

app.post('/', (req, res) => {
  res.send("create demo using post()");
})

//Update

app.put('/', (req, res) => {
  res.send("update demo using put()");
})

//Delete

app.delete('/',(req,res)=> {
  res.send("delete demo using delete()")
})

app.listen(PORT, () => {
  console.log(`App3 Server Running on : http://localhost:${PORT}/`)
})