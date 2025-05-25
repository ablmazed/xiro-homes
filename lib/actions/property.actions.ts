'use server'

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

// export const getPropertyById = async (id: string) => {
//   // Placeholder implementation - replace with actual data fetching logic
//   return {
//     id: id,
//     title: 'Sample Property',
//     description: 'This is a sample property description.',
//     imageUrl: '/placeholder.svg',
//     location: 'Sample Location',
//     price: 500000,
//     bedrooms: 3,
//     bathrooms: 2,
//     sqft: 1500,
//     GarageSqFt: 400,
//     basement: 'Finished',
//     YearBuilt: 2000,
//     propertyType: 'House',
//     indoorFeatures: ['Fireplace', 'Hardwood Floors'],
//     buildingAmenities: ['Pool', 'Gym'],
//   }
// }

// GET  property
export async function getProperty() {
  await connectToDatabase()

  const properties = await Property.find()

  return {
    property: JSON.parse(JSON.stringify(properties)) as IProperty,
  }
}
