import Footer from '@/components/shared/footer'
import Header from '@/components/shared/header'

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
