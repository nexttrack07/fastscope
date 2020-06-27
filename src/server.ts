import 'dotenv/config'
import express, { Application } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { Controller } from './common'
import { PropertyController } from './property'

export class Server {
  private app: Application = express()
  public static instance: Server

  private constructor(middlewares: any[], controllers: Controller[]) {
    this.initializeMiddlewares(...middlewares)
    this.initializeControllers(...controllers)
  }

  private initializeMiddlewares(...args: any[]): void {
    args.forEach((arg) => {
      this.app.use(arg)
    })
  }

  private initializeControllers(...controllers: Controller[]): void {
    controllers.forEach((controller) => {
      this.app.use(controller.path, controller.router)
    })
  }

  public init(port: number): void {
    this.app.listen(port, () => {
      console.log(`Server running on port ${port}`)
    })
  }

  public static getInstance(): Server {
    if (!Server.instance) {
      Server.instance = new Server(
        [cors(), helmet(), express.json()],
        [new PropertyController('/properties')]
      )
    }

    return Server.instance
  }
}
