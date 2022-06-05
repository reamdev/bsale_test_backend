import { getAllProducts, searchProduct } from '../controllers'
import { Router } from 'express'

const router = Router()

router.get('/', async (req, res) => {
  const categoryId = req.query.category ? String(req.query.category) : ''
  const limit = req.query.limit ? Number(req.query.limit) : 10
  const offset = req.query.init ? Number(req.query.init) : 1

  const response = await getAllProducts(categoryId, limit, offset)

  res.send(response)
})

router.get('/search', async (req, res) => {
  const search = req.query.value ? String(req.query.value) : ''
  const limit = req.query.limit ? Number(req.query.limit) : 10
  const offset = req.query.init ? Number(req.query.init) : 1

  const response = await searchProduct(search, limit, offset)

  res.send(response)
})

export default router
