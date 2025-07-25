import { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import { auth } from '@/auth'
import SeparatorWithOr from '@/components/shared/separator-or'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import CredentialsSignInForm from './credentials-signin-form'
import { Button } from '@/components/ui/button'
import { app_name } from '@/lib/constants'
import { GoogleSignInForm } from './google-signin-form'

export const metadata: Metadata = {
  title: 'Sign In',
}

type Props = {
  searchParams: Promise<{
    callbackUrl: string
  }>
}

export default async function SignIn({ searchParams }: Props) {
  const { callbackUrl = '/' } = await searchParams

  const session = await auth()
  if (session) {
    return redirect(callbackUrl)
  }

  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <CredentialsSignInForm />
          </div>
          <SeparatorWithOr />
          <div className="mt-4">
            <GoogleSignInForm />
          </div>
        </CardContent>
      </Card>
      <SeparatorWithOr>New to {app_name}?</SeparatorWithOr>

      <Link href={`/sign-up?callbackUrl=${encodeURIComponent(callbackUrl)}`}>
        <Button className="w-full" variant="outline">
          Create your {app_name} account
        </Button>
      </Link>
    </div>
  )
}
