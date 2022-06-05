import { config } from 'dotenv'

config()

export default {
  app: {
    port: process.env.PORT || 8000
  },
  db: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'dev',
    password: process.env.DB_PASSWORD || 'dev',
    database: process.env.DB_NAME || 'dev'
  }
}