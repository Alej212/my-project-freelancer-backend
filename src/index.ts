import express from 'express'
import dotenv from 'dotenv'
import routes from './routes/index'
import './configs/PostgresConnection'
import './configs/RedisConnection'
dotenv.config()

//* Variables

const app = express()
const PORT = process.env.PORT !== undefined ? process.env.PORT : 3000

//* Uses

app.use(express.json())
app.use(routes)

//* Route init

app.get('/', (req, res) => {
  res.send('hello friend')
})

//* Port listen

app.listen(PORT, () => {
  console.log(`server listen in http://localhost:${PORT}`)
})

//* DB listen

// postgresConnection
// redisConnection
