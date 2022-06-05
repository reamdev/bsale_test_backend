import { initConnection } from './db'
import express from 'express'
import morgan from 'morgan'
import { CategoryRouter, ProductRouter } from './routes'

initConnection()
const app = express()

// middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/products', ProductRouter)
app.use('/api/v1/categories', CategoryRouter)

app.listen(8000, () => {
  console.log('Server is running on port 8000')
})
