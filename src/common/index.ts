import { IRouter } from 'express'

export interface Controller {
  router: IRouter
  path: string
}
