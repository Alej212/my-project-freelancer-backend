import * as redis from 'redis'
import dotenv from 'dotenv'
dotenv.config()

const client = redis.createClient({
  url: 'redis://localhost:6379',
  password: process.env.REDIS_PASSWORD
})

// Escucha el evento 'ready'
client.on('ready', () => {
  console.log('Conexión a Redis establecida correctamente')
})

// Escucha el evento 'error' para manejar posibles errores
client.on('error', (err) => {
  console.error('Error en la conexión a Redis:', err)
})

export default client
