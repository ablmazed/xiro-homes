import HeroBanner from '@/components/shared/home/HeroBanner'
import HomeService from '../../components/shared/home/HomeService'
import HomePicText from '@/components/shared/home/HomePicText'
import HomeContactForm from '@/components/HomeContactForm'

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <HomeService />
      <HomePicText />
      <HomeContactForm />
    </div>
  )
}
