import { createPool, Pool } from 'mysql'
import config from '../config'

let conector: Pool

export const initConnection = () => {
  try {
    conector = createPool({
      host: config.db.host,
      user: config.db.user,
      password: config.db.password,
      database: config.db.database
    })

    setInterval(() => {
      conector.query('SELECT 1', err => {
        if (err) {
          console.log(err)
          return
        }
      })
    }, 4000)
  } catch (err) {
    console.error('MySQL Connector init error', err)
    throw new Error('Error al inicializar pool')
  }
}

export const execute = <T>(query: string, params: string[] | object): Promise<T> => {
  try {
    if (!conector) throw new Error('Pool is not initialized')

    return new Promise<T>((resolve, reject) => {
      conector.query(query, params, (err, results) => {
        if (err) return reject(err)
        resolve(results)
      })
    })
  } catch (err) {
    console.error('MySQL Connector execute error', err)
    throw new Error('Error al ejecutar MySQL query')
  }
}
