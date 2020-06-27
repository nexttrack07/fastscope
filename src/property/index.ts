export { PropertyController } from './property.controller'

export interface Property {
  address: string
  city: string
  zip: string | number
  rooms: number
  bathrooms: number
  sqft: number
}
