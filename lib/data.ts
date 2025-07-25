import {
  Data,
  IFooterMenu,
  IHeaderMenu,
  IHomeCard,
  IUserInput,
  IPropertyInput,
} from '@/types'
import bcrypt from 'bcryptjs'
const users: IUserInput[] = [
  {
    name: 'John',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'Admin',
    address: {
      fullName: 'John Doe',
      street: '111 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '10001',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Stripe',
    emailVerified: false,
  },
  {
    name: 'Jane',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Jane Harris',
      street: '222 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '1002',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Cash On Delivery',
    emailVerified: false,
  },
  {
    name: 'Jack',
    email: 'jack@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Jack Ryan',
      street: '333 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '1003',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'PayPal',
    emailVerified: false,
  },
  {
    name: 'Sarah',
    email: 'sarah@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Sarah Smith',
      street: '444 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '1005',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Cash On Delivery',
    emailVerified: false,
  },
  {
    name: 'Michael',
    email: 'michael@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'John Alexander',
      street: '555 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '1006',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'PayPal',
    emailVerified: false,
  },
  {
    name: 'Emily',
    email: 'emily@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Emily Johnson',
      street: '666 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '10001',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Stripe',
    emailVerified: false,
  },
  {
    name: 'Alice',
    email: 'alice@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Alice Cooper',
      street: '777 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '10007',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Cash On Delivery',
    emailVerified: false,
  },
  {
    name: 'Tom',
    email: 'tom@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Tom Hanks',
      street: '888 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '10008',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Stripe',
    emailVerified: false,
  },
  {
    name: 'Linda',
    email: 'linda@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Linda Holmes',
      street: '999 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '10009',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'PayPal',
    emailVerified: false,
  },
  {
    name: 'George',
    email: 'george@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'George Smith',
      street: '101 First Ave',
      city: 'New York',
      province: 'NY',
      postalCode: '10010',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Stripe',
    emailVerified: false,
  },
  {
    name: 'Jessica',
    email: 'jessica@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Jessica Brown',
      street: '102 First Ave',
      city: 'New York',
      province: 'NY',
      postalCode: '10011',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Cash On Delivery',
    emailVerified: false,
  },
  {
    name: 'Chris',
    email: 'chris@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Chris Evans',
      street: '103 First Ave',
      city: 'New York',
      province: 'NY',
      postalCode: '10012',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'PayPal',
    emailVerified: false,
  },
  {
    name: 'Samantha',
    email: 'samantha@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Samantha Wilson',
      street: '104 First Ave',
      city: 'New York',
      province: 'NY',
      postalCode: '10013',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Stripe',
    emailVerified: false,
  },
  {
    name: 'David',
    email: 'david@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'David Lee',
      street: '105 First Ave',
      city: 'New York',
      province: 'NY',
      postalCode: '10014',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Cash On Delivery',
    emailVerified: false,
  },
  {
    name: 'Anna',
    email: 'anna@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Anna Smith',
      street: '106 First Ave',
      city: 'New York',
      province: 'NY',
      postalCode: '10015',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'PayPal',
    emailVerified: false,
  },
]

const headerMenu: IHeaderMenu[] = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Properties',
    href: '/properties',
  },
]

const footerMenu: IFooterMenu[] = [
  {
    title: 'Join Us',
    links: [
      {
        name: 'Become an Agent',
        href: '/',
      },
      {
        name: 'Get Referrals',
        href: '/',
      },
      {
        name: 'Careers',
        href: '/',
      },
    ],
  },
  {
    title: 'Find Us',
    links: [
      {
        name: 'Contact Us',
        href: '/',
      },
      {
        name: 'Help Center',
        href: '/',
      },
      {
        name: 'Advertise',
        href: '/',
      },
      {
        name: 'Become a Lander Partner',
        href: '/',
      },
    ],
  },
  {
    title: 'Subsidiaries',
    links: [
      {
        name: 'Rent',
        href: '/faqs',
      },
      {
        name: 'ApartmentGuide',
        href: '/',
      },
      {
        name: 'Bay Equity Home Loans',
        href: '/',
      },
      {
        name: 'Title Forward',
        href: '/',
      },
    ],
  },
]

const homeCard: IHomeCard[] = [
  {
    icon: '/redfinagent.png',
    title: 'Buy',
    description:
      'Redfin agents are among the most experienced in the industry and can help you win in today’s market.',
    btnTitle: ' Find An Agent',
    btnColor: 'bg-green-500 hover:bg-green-300 hover:text-white',
  },
  {
    icon: '/Sell.png',
    title: 'Sell',
    description:
      'We know how to price, market, and sell your home for top dollar. And we do it all for half the listing fee others often charge.',
    btnTitle: ' Learn More ',
    btnColor: 'bg-yellow-500 hover:bg-yellow-300 hover:text-white',
  },
  {
    icon: '/Rent.png',
    title: 'Rent',
    description:
      'Whether you’re searching for apartments, condos, or rental homes, we make it easy to find a place you’ll love.',
    btnTitle: 'Explore Rentals ',
    btnColor: 'bg-orange-500 hover:bg-orange-300 hover:text-white',
  },
]

const property: IPropertyInput[] = [
  {
    title: 'Title - 1',
    tags: ['new-arrival', 'best-seller', 'old-arrival'],
    description: 'Description-1',
    details: 'Details-1',
    price: 50,
    location: 'Madarganj, jamalpur',
    imageUrl: '/assets/images/prop1.webp',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 800,
    LotSize: 20,
    HOADues: 25,
    YearBuilt: 25,
    GarageSqFt: 18,
    BasementSqFt: 8,
    propertyType: 'BeedRoom',
    isForSale: true,
    basement: 'strong',
    floorCovering: ['full', 'slite', 'tite'],
    coolingType: ['cool1', 'cool2', 'coold3'],
    heatingType: ['heating-type-1', 'heating-type-2', 'heating-type-3'],
    heatingFuel: ['heating-fuel-1', 'heating-fuel-2', 'heating-fuel-3'],
    rooms: ['2', '3', '4'],
    indoorFeatures: [
      'indoor-feather-1',
      'indoor-feather-2',
      'indoor-feather-3',
    ],
    buildingAmenities: [
      'building-amenities-1',
      'building-amenities-2',
      'building-amenities-1',
    ],
    architecturalStyle: 'architecturalstyle-good',
    exterior: ['good', 'better', 'best'],
    outdoorAmenities: [
      'outdoorAmenities-1',
      'outdoorAmenities-2',
      'outdoorAmenities-3',
    ],
    parking: ['two', 'three', 'four'],
    roof: ['two', 'three', 'four'],
    view: ['3', '4', '5'],
  },
  {
    title: 'Title - 2',
    tags: ['new-arrival', 'best-seller', 'feature'],
    description: 'Description-2',
    details: 'Details-2',
    price: 500,
    location: 'Madarganj-2, jamalpur-2',
    imageUrl: '/assets/images/prop2.webp',
    bedrooms: 41,
    bathrooms: 31,
    sqft: 8001,
    LotSize: 201,
    HOADues: 251,
    YearBuilt: 251,
    GarageSqFt: 181,
    BasementSqFt: 81,
    propertyType: 'BeedRoom1',
    isForSale: true,
    basement: 'strong1',
    floorCovering: ['full', 'slite', 'tite'],
    coolingType: ['cool1', 'cool2', 'coold3'],
    heatingType: ['heating-type-1', 'heating-type-2', 'heating-type-3'],
    heatingFuel: ['heating-fuel-1', 'heating-fuel-2', 'heating-fuel-3'],
    rooms: ['2', '3', '4'],
    indoorFeatures: [
      'indoor-feather-21',
      'indoor-feather-22',
      'indoor-feather-33',
    ],
    buildingAmenities: [
      'building-amenities-1',
      'building-amenities-2',
      'building-amenities-1',
    ],
    architecturalStyle: 'architecturalstyle-good',
    exterior: ['good', 'better', 'best'],
    outdoorAmenities: [
      'outdoorAmenities-1',
      'outdoorAmenities-2',
      'outdoorAmenities-3',
    ],
    parking: ['two', 'three', 'four'],
    roof: ['two', 'three', 'four'],
    view: ['3', '4', '5'],
  },
  {
    title: 'Title - 3',
    tags: ['new-arrival'],
    description: 'Description-3',
    details: 'Details-3',
    price: 503,
    location: 'Madarganj3, jamalpur3',
    imageUrl: '/assets/images/prop3.webp',
    bedrooms: 43,
    bathrooms: 33,
    sqft: 8003,
    LotSize: 203,
    HOADues: 253,
    YearBuilt: 253,
    GarageSqFt: 18,
    BasementSqFt: 8,
    propertyType: 'BeedRoom3',
    isForSale: true,
    basement: 'strong',
    floorCovering: ['full', 'slite', 'tite'],
    coolingType: ['cool1', 'cool2', 'coold3'],
    heatingType: ['heating-type-1', 'heating-type-2', 'heating-type-3'],
    heatingFuel: ['heating-fuel-1', 'heating-fuel-2', 'heating-fuel-3'],
    rooms: ['2', '3', '4'],
    indoorFeatures: [
      'indoor-feather-31',
      'indoor-feather-32',
      'indoor-feather-33',
    ],
    buildingAmenities: [
      'building-amenities-1',
      'building-amenities-2',
      'building-amenities-1',
    ],
    architecturalStyle: 'architecturalstyle-good',
    exterior: ['good', 'better', 'best'],
    outdoorAmenities: [
      'outdoorAmenities-1',
      'outdoorAmenities-2',
      'outdoorAmenities-3',
    ],
    parking: ['two', 'three', 'four'],
    roof: ['two', 'three', 'four'],
    view: ['3', '4', '5'],
  },
]

const data: Data = {
  users,
  headerMenu,
  footerMenu,
  homeCard,
  property,
  settings: [],
}

export default data
