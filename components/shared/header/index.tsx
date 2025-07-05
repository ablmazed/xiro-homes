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
          <div className="flex justify-between">
            <div className="my-2 mx-5">
              <button>
                <MoonIcon />
              </button>
            </div>
            <div>
              <UserButton />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
