import { execute } from '../db'

export const getAllCategories = async () => {
  const sql = 'SELECT * FROM category'
  return await execute(sql, [])
}
