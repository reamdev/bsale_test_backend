import { getAllCategories } from '../controllers'
import { Router } from 'express'

const router = Router()

router.get('/', async (_, res) => {
  const response = await getAllCategories()

  console.log(response)
  

  res.send(response)
})

export default router
