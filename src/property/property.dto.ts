import { IsNumber, IsString } from 'class-validator'

class CreatePropertyDto {
  @IsString()
  public address: string

  @IsString()
  public city: string

  @IsNumber()
  public zip: number

  @IsNumber()
  public rooms: number

  @IsNumber()
  public bathrooms: number

  @IsNumber()
  public sqft: number
}

export default CreatePropertyDto
