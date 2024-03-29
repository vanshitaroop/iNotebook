const connectToMongo = require('./db');
const express = require('express')
connectToMongo();

const app = express()
const port = 5000
var cors = require('cors') 
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use(cors())
app.use(express.json());

//Available routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen( process.env.PORT || port, () => {
  console.log(`iNotebook backend listening on port ${port}`)
})