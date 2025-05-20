import Link from 'next/link'
import Menu from './menu'
import { app_name } from '@/lib/constants'
import { MoonIcon } from 'lucide-react'
import UserButton from './user-button'

export default function Header() {
  return (
    <header>
      <div className="px-20 py-4">
        <div className="flex justify-between">
          <div>
            <Link href="/">{app_name}</Link>
          </div>
          <div className="">
            <Menu />
          </div>
          <div>
            <button>
              <MoonIcon />
              <UserButton />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
