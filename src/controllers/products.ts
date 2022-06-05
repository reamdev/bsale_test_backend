import { execute } from '../db'

export const getAllProducts = async (categoryId = '', limit = 10, offset = 0) => {
  const sql = categoryId !== '' ? 'SELECT * FROM product WHERE category = ? LIMIT ? OFFSET ?' : 'SELECT * FROM product LIMIT ? OFFSET ?'
  const params = categoryId !== '' ? [categoryId, limit, offset] : [limit, offset]
  return await execute(sql, params)
}

export const searchProduct = async (search = '', limit = 10, offset = 0) => {
  const sql = 'SELECT product.id as id, product.name as name, product.url_image as url_image, product.price as price, product.discount as discount, category.name as category FROM product INNER JOIN category ON product.category = category.id WHERE LOWER(product.name) LIKE LOWER(?) OR LOWER(category.name) LIKE LOWER(?) LIMIT ? OFFSET ?'
  return await execute(sql, [`%${search}%`, `%${search}%`, limit, offset])
}
