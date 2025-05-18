'use client'
import { useState } from 'react'
// import { Spinner } from '@heroui/spinner'

import { Input } from '@/components/ui/input'
import ForSale from '@/components/shared/properties/ForSale'
import PropertyCard from '@/components/shared/properties/PropertyCard'

export default function Properties() {
  //   const [loading, setLoading] = useState()
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <main>
      {/* {loading && (
        <div className="absolute inset-0 z-10 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm">
          <Spinner />
        </div>
      )} */}
      <div>
        <div className="w-full px-4 py-2 flex flex-row items-center justify-between gap-4 border-t border-b border-gray-700">
          {/* Search Bar */}
          <div className="flex-grow md:w-auto relative">
            <Input
              placeholder="Search by Address, neighborhood, city, ZIP"
              className="w-full md:w-96"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Set search term
            />
          </div>

          {/* For Sale Component */}
          <ForSale />
        </div>
      </div>
      <div className="">
        <PropertyCard />
      </div>
    </main>
  )
}
