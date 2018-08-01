import express from 'express'
import cors from 'cors'

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3030

app.use(cors())

app.set('port', port)

app.get('/api/test', (req, res) => {
  res.send(`Server message ${new Date().getMinutes()}:${new Date().getSeconds()}`)
})

// Listen the server
app.listen(port, host)
console.log('Server listening on ' + host + ':' + port)
