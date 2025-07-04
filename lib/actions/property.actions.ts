'use server'

import { connectToDatabase } from '../mongodb'
import Property, { IProperty } from '../models/property.models'
import { IPropertyInput } from '@/types'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { formatError } from '../utils'
import { PropertyInputSchema } from '../validation/validator'

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

// GET ALL PROPERTY FOR ADMIN
export async function getAllPropertyForAdmin({
  query,
  page = 1,
  sort = 'latest',
  limit,
}: {
  query: string
  page?: number
  sort?: string
  limit?: number
}) {
  await connectToDatabase()

  const {
    common: { pageSize },
  } = await getSetting()
  limit = limit || pageSize

  const queryFilter =
    query && query !== 'all'
      ? {
          name: {
            $regex: query,
            $options: 'i',
          },
        }
      : {}

  const order: Record<string, 1 | -1> =
    sort === 'best-selling'
      ? { numSales: -1 }
      : sort === 'price-low-to-high'
      ? { price: 1 }
      : sort === 'price-high-to-low'
      ? { price: -1 }
      : sort === 'avg-customer-review'
      ? { avgRating: -1 }
      : { _id: -1 }
  const properties = await Property.find({
    ...queryFilter,
  })
    .sort(order)
    .skip(limit * (Number(page) - 1))
    .limit(limit)
    .lean()

  const countProperties = await Property.countDocuments({
    ...queryFilter,
  })
  return {
    products: JSON.parse(JSON.stringify(properties)) as IProperty[],
    totalPages: Math.ceil(countProperties),
  }
}

// CREATE
export async function createProperty(data: IPropertyInput) {
  try {
    const property = PropertyInputSchema.parse(data)
    await connectToDatabase()
    await Property.create(property)
    revalidatePath('/admin/properties')
    return {
      success: true,
      message: 'Product created successfully',
    }
  } catch (error) {
    return { success: false, message: formatError(error) }
  }
}

// UPDATE
export async function updateProperty(
  data: z.infer<typeof PropertyUpdateSchema>
) {
  try {
    const property = PropertyUpdateSchema.parse(data)
    await connectToDatabase()
    await Property.findByIdAndUpdate(property._id, property)
    revalidatePath('/admin/properties')
    return {
      success: true,
      message: 'Product updated successfully',
    }
  } catch (error) {
    return { success: false, message: formatError(error) }
  }
}

// DELETE
export async function deleteProperty(id: string) {
  try {
    await connectToDatabase()
    const res = await Property.findByIdAndDelete(id)
    if (!res) throw new Error('Product not found')
    revalidatePath('/admin/products')
    return {
      success: true,
      message: 'Product deleted successfully',
    }
  } catch (error) {
    return { success: false, message: formatError(error) }
  }
}
