import express from 'express'
import dotenv from 'dotenv'
import routes from './routes/index'
import sequelize from './configs/PostgresConnection'
import redis from './configs/RedisConnection'
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

//* postgres

sequelize
  .sync()
  .then(result => {
    console.log('Database connected')
  })
  .catch(err => console.log(err))

//* redis

// Escucha el evento 'ready'
redis.on('ready', () => {
  console.log('Conexión a Redis establecida correctamente')
})

// Escucha el evento 'error' para manejar posibles errores
redis.on('error', (err) => {
  console.error('Error en la conexión a Redis:', err)
})

async function redisIsConnected (): Promise<void> {
  try {
    await redis.set('test', 'value')
    const value = await redis.get('test')
    console.log('Got value from Redis:', value)
  } catch (err) {
    console.error('Error with Redis operation:', err)
  }
}
redisIsConnected().catch((err: any) => {
  console.error('this error', err)
})
