'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
import type { IProperty } from '@/lib/models/property.models'
import { UploadButton } from '@/lib/uploadthing'
import {
  PropertyInputSchema,
  PropertyUpdateSchema,
} from '@/lib/validation/validator'
import { Checkbox } from '@/components/ui/checkbox'
import type { IPropertyInput } from '@/types'
import { createProperty, updateProperty } from '@/lib/actions/property.actions'

const propertyDefaultValues: IPropertyInput =
  process.env.NODE_ENV === 'development'
    ? {
        title: 'this is title',
        tags: ['mazed'],
        description: 'this is description',
        details: 'this is details',
        price: 99,
        location: 'this is location',
        imageUrl: '/assets/images/prop7.jpg',
        bedrooms: 3,
        bathrooms: 4,
        sqft: 1800,
        LotSize: 50,
        HOADues: 79,
        YearBuilt: 5,
        GarageSqFt: 57,
        BasementSqFt: 505,
        propertyType: 'this is type',
        isForSale: false,
        basement: 'this is basement',
        floorCovering: ['this is floor covering'],
        coolingType: [],
        heatingType: [],
        heatingFuel: [],
        rooms: [],
        indoorFeatures: [],
        buildingAmenities: [],
        architecturalStyle: 'this is archi',
        exterior: [],
        outdoorAmenities: [],
        parking: [],
        roof: [],
        view: [],
      }
    : {
        title: '',
        tags: [],
        description: '',
        details: '',
        price: 0,
        location: '',
        imageUrl: '',
        bedrooms: 0,
        bathrooms: 0,
        sqft: 0,
        LotSize: 0,
        HOADues: 0,
        YearBuilt: 0,
        GarageSqFt: 0,
        BasementSqFt: 0,
        propertyType: '',
        isForSale: false,
        basement: '',
        floorCovering: [],
        coolingType: [],
        heatingType: [],
        heatingFuel: [],
        rooms: [],
        indoorFeatures: [],
        buildingAmenities: [],
        architecturalStyle: '',
        exterior: [],
        outdoorAmenities: [],
        parking: [],
        roof: [],
        view: [],
      }

const PropertiesForm = ({
  type,
  property,
  propertyId,
}: {
  type: 'Create' | 'Update'
  property?: IProperty
  propertyId?: string
}) => {
  const router = useRouter()

  // Fix the type mismatch by using a more flexible approach
  const form = useForm({
    resolver: zodResolver(
      type === 'Update' ? PropertyUpdateSchema : PropertyInputSchema
    ),
    defaultValues:
      property && type === 'Update' ? property : propertyDefaultValues,
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function onSubmit(values: any) {
    // Cast to IPropertyInput after validation
    const propertyData = values as IPropertyInput

    if (type === 'Create') {
      const res = await createProperty(propertyData)
      if (!res.success) {
        toast.error('Data create failed')
      } else {
        toast.success('Data created successfully')
        router.push(`/admin/properties`)
      }
    }

    if (type === 'Update') {
      if (!propertyId) {
        router.push(`/admin/properties`)
        return
      }
      const res = await updateProperty({ ...propertyData, _id: propertyId })
      if (!res.success) {
        toast.error('Update failed')
      } else {
        toast.success('Updated successfully')
        router.push(`/admin/properties`)
      }
    }
  }

  const images = form.watch('imageUrl')
  console.log(form.formState.errors)

  return (
    <Form {...form}>
      <form
        method="post"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter property title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="Enter property description"
                      className="pl-8"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter Price"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bedrooms"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Bedrooms</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter number of bedrooms"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="sqft"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>SQFT</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter square footage"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="basement"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Basement</FormLabel>
                <FormControl>
                  <Input placeholder="Enter basement details" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bathrooms"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Bathrooms</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter number of bathrooms"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input placeholder="Enter property location" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="propertyType"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Property Type</FormLabel>
                <FormControl>
                  <Input placeholder="Enter property type" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="imageUrl"
            render={() => (
              <FormItem className="w-full">
                <FormLabel>Images</FormLabel>
                <Card>
                  <CardContent className="space-y-2 mt-2 min-h-48">
                    <div className="flex justify-start items-center space-x-2">
                      {images && (
                        <Image
                          src={images || '/placeholder.svg'}
                          alt="property image"
                          className="w-20 h-20 object-cover object-center rounded-sm"
                          width={100}
                          height={100}
                        />
                      )}
                      <FormControl>
                        <UploadButton
                          endpoint="imageUploader"
                          onClientUploadComplete={(res: { url: string }[]) => {
                            form.setValue('imageUrl', res[0].url)
                          }}
                          onUploadError={(error: Error) => {
                            toast.error('Image upload error')
                            console.log(error)
                          }}
                        />
                      </FormControl>
                    </div>
                  </CardContent>
                </Card>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div>
          <FormField
            control={form.control}
            name="details"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Details</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter detailed property information"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Provide comprehensive details about the property.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div>
          <FormField
            control={form.control}
            name="isForSale"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Is For Sale?</FormLabel>
                </div>
              </FormItem>
            )}
          />
        </div>

        <div>
          <Button
            type="submit"
            size="lg"
            disabled={form.formState.isSubmitting}
            className="button col-span-2 w-full"
          >
            {form.formState.isSubmitting ? 'Submitting...' : `${type} Property`}
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default PropertiesForm
