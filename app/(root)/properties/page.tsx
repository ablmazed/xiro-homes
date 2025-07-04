import PropertyCard from '@/components/shared/properties/PropertyCard'
import { getAllProperty } from '@/lib/actions/property.actions'

export default async function PropertyPage() {
  const propertydata = await getAllProperty()

  console.log('data from page page', propertydata)

  return (
    <div className="p-6">
      <h2>There are Property Card</h2>
      <PropertyCard properties={propertydata.property} />
    </div>
  )
}
