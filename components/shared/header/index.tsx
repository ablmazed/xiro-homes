import Link from 'next/link'
import Menu from './menu'
import { APP_NAME } from '@/lib/constants'
import { MoonIcon } from 'lucide-react'
export default function Header() {
  return (
    <header>
      <div className="px-20 py-4">
        <div className="flex justify-between">
          <div>
            <Link href="/">{APP_NAME}</Link>
          </div>
          <div className="">
            <Menu />
          </div>
          <div>
            <button>
              <MoonIcon />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
