import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
class Property {
  @PrimaryGeneratedColumn()
  public id?: number

  @Column()
  public address: string

  @Column()
  public city: string

  @Column()
  public zip: number

  @Column()
  public rooms: number

  @Column()
  public bathrooms: number

  @Column()
  public sqft: number
}

export default Property
