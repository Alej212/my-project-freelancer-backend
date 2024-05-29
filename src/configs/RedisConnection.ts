// import { createClient } from 'redis'
// import dotenv from 'dotenv'
// dotenv.config()

// const redis = createClient({
//   url: 'redis://redis:6379',
//   password: 'password'
// })

import { Redis } from 'ioredis'

const redis = new Redis({
  host: 'redis',
  port: 6379,
  password: 'password'
})

export default redis
