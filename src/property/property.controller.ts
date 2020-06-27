import express, { IRouter, Request, Response } from 'express'
import { Controller } from '../common'
import { getRepository } from 'typeorm'
import Property from './property.entity'
import CreatePropertyDto from './property.dto'

export class PropertyController implements Controller {
  public router: IRouter = express.Router()
  private propertyRepo = getRepository(Property)

  constructor(public path: string) {
    this.initializeRoutes()
  }

  private initializeRoutes(): void {
    this.router.get('/', this.getProperties)
    this.router.post('/', this.createProperty)
  }

  private getProperties = async (req: Request, res: Response) => {
    const properties = await this.propertyRepo.find()
    res.send(properties)
  }

  private createProperty = async (req: Request, res: Response) => {
    const propertyData: CreatePropertyDto = req.body
    const newProperty = this.propertyRepo.create({
      ...propertyData,
    })

    await this.propertyRepo.save(newProperty)

    res.send(newProperty)
  }
}
