import { Server } from './server'
import { createConnection } from 'typeorm'
import config from './ormconfig'

const PORT: number = 5000

createConnection(config)
  .then(() => {
    console.log('Database connected!')
    const server = Server.getInstance()
    server.init(PORT)
  })
  .catch((err) => {
    console.log('Error during database connection: ', err)
  })
