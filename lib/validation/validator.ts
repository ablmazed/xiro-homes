// USER
import * as z from 'zod'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone must be at least 10 digits'),
  message: z.string().min(5, 'Message must be at least 5 characters'),
})

export default formSchema

//Header-Menu
export const HeaderMenuSchema = z.object({
  name: z.string(),
  href: z.any(),
})

//Footer-Menu

export const FooterMenuSchema = z.object({
  title: z.string(),
  links: z.array(
    z.object({
      name: z.string(),
      href: z.string(),
    })
  ),
})
//Home-Card

export const HomeCardSchema = z.object({
  icon: z.string(),
  title: z.string(),
  description: z.string(),
  btnTitle: z.string(),
  btnColor: z.string(),
})

// USER
const UserName = z
  .string()
  .min(2, { message: 'Username must be at least 2 characters' })
  .max(50, { message: 'Username must be at most 30 characters' })
const Email = z.string().min(1, 'Email is required').email('Email is invalid')
const Password = z.string().min(3, 'Password must be at least 3 characters')
const UserRole = z.string().min(1, 'role is required')

export const UserInputSchema = z.object({
  name: UserName,
  email: Email,
  image: z.string().optional(),
  emailVerified: z.boolean(),
  role: UserRole,
  password: Password,
  paymentMethod: z.string().min(1, 'Payment method is required'),
  address: z.object({
    fullName: z.string().min(1, 'Full name is required'),
    street: z.string().min(1, 'Street is required'),
    city: z.string().min(1, 'City is required'),
    province: z.string().min(1, 'Province is required'),
    postalCode: z.string().min(1, 'Postal code is required'),
    country: z.string().min(1, 'Country is required'),
    phone: z.string().min(1, 'Phone number is required'),
  }),
})

export const UserSignInSchema = z.object({
  email: Email,
  password: Password,
})

export const UserSignUpSchema = UserSignInSchema.extend({
  name: UserName,
  confirmPassword: Password,
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
})

export const PropertyInputSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  tags: z.array(z.string()).default([]),
  description: z.string().min(1, 'Description is required'),
  details: z.string().min(1, 'Details are required'),
  price: z.number().positive('Price must be greater than 0'),
  location: z.string().min(1, 'Location is required'),
  imageUrl: z.string().min(1, 'Minimum 1 image'),
  bedrooms: z.number().min(1, 'Bedrooms must be at least 1'),
  bathrooms: z.number().min(1, 'Bathrooms must be at least 1'),
  sqft: z.number().min(1, 'Square footage must be greater than 0'),
  LotSize: z.number().min(1, 'Lot Size must be greater than 0'),
  HOADues: z.number().min(1, 'HOA Dues must be greater than 0'),
  YearBuilt: z.number().min(1, 'Year Built must be greater than 0'),
  GarageSqFt: z.number().min(1, 'Garage SqFt must be greater than 0'),
  BasementSqFt: z.number().min(1, 'Basement SqFt must be greater than 0'),
  propertyType: z.string().min(1, 'Property type is required'),
  isForSale: z.boolean(),
  basement: z.string().optional(),
  floorCovering: z.array(z.string()).optional(),
  coolingType: z.array(z.string()).optional(),
  heatingType: z.array(z.string()).optional(),
  heatingFuel: z.array(z.string()).optional(),
  rooms: z.array(z.string()).optional(),
  indoorFeatures: z.array(z.string()).optional(),
  buildingAmenities: z.array(z.string()).optional(),
  architecturalStyle: z.string().optional(),
  exterior: z.array(z.string()).optional(),
  outdoorAmenities: z.array(z.string()).optional(),
  parking: z.array(z.string()).optional(),
  roof: z.array(z.string()).optional(),
  view: z.array(z.string()).optional(),
})

export const PropertyUpdateSchema = PropertyInputSchema.extend({
  _id: z.string().min(1, 'Property ID is required'),
})

// export const PropertyUpdateSchema = PropertyInputSchema.partial()

export const SettingInputSchema = z.object({
  // PROMPT: create fields
  // codeium, based on the mongoose schema for settings
  common: z.object({
    pageSize: z.coerce
      .number()
      .min(1, 'Page size must be at least 1')
      .default(9),
    isMaintenanceMode: z.boolean().default(false),
    freeShippingMinPrice: z.coerce
      .number()
      .min(0, 'Free shipping min price must be at least 0')
      .default(0),
    defaultTheme: z
      .string()
      .min(1, 'Default theme is required')
      .default('light'),
    defaultColor: z
      .string()
      .min(1, 'Default color is required')
      .default('gold'),
  }),
  site: z.object({
    name: z.string().min(1, 'Name is required'),
    logo: z.string().min(1, 'logo is required'),
    slogan: z.string().min(1, 'Slogan is required'),
    description: z.string().min(1, 'Description is required'),
    keywords: z.string().min(1, 'Keywords is required'),
    url: z.string().min(1, 'Url is required'),
    email: z.string().min(1, 'Email is required'),
    phone: z.string().min(1, 'Phone is required'),
    author: z.string().min(1, 'Author is required'),
    copyright: z.string().min(1, 'Copyright is required'),
    address: z.string().min(1, 'Address is required'),
  }),
})
