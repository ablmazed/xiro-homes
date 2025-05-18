import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

export default function PropertyCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 py-10 px-20 gap-3">
      <Card className=" border-solid border-gray-100 shadow-2xl border-2  ">
        <CardContent>
          <Link href="/properties/">
            <Image
              src="/assets/images/prop4.webp"
              alt="prop4 image"
              width={400}
              height={300}
            />
          </Link>

          <p>$2.3</p>
          <p>3 bed, 1 bath</p>
          <Link href="/properties?">
            <h6>karachi</h6>
          </Link>
        </CardContent>
      </Card>
      <Card className=" border-solid border-gray-100 shadow-2xl border-2  ">
        <CardContent>
          <Link href="/">
            <Image
              src="/assets/images/prop5.webp"
              alt="prop4 image"
              width={400}
              height={300}
            />
          </Link>

          <p>$2.3</p>
          <p>3 bed, 1 bath</p>
          <h6>karachi</h6>
        </CardContent>
      </Card>
      <Card className=" border-solid border-gray-100 shadow-2xl border-2  ">
        <CardContent>
          <Link href="/">
            <Image
              src="/assets/images/prop6.webp"
              alt="prop4 image"
              width={400}
              height={300}
            />
          </Link>

          <p>$2.3</p>
          <p>3 bed, 1 bath</p>
          <h6>karachi</h6>
        </CardContent>
      </Card>
    </div>
  )
}
