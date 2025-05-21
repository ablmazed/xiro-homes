import { connectToDatabase } from '../mongodb'
import Property, { IProperty } from '../models/property.models'

// GET ALL property
export async function getAllProperty() {
  await connectToDatabase()

  const properties = await Property.find()

  return {
    property: JSON.parse(JSON.stringify(properties)) as IProperty[],
  }
}

// GET ONE PROPERTY BY ID

export async function getPropertyById(id: string) {
  await connectToDatabase()
  const property = await Property.findById(id)
  return JSON.parse(JSON.stringify(property)) as IProperty
}
