'use client'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

type SigninForm = {
  email: string
  password: string
}

export default function Signin() {
  const { register, handleSubmit } = useForm<SigninForm>()
  const [error, setError] = useState('')
  const router = useRouter()

  const onSubmit = async (data: SigninForm) => {
    const res = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
    })

    if (res?.error) {
      setError(res.error)
    } else {
      router.push('/dashboard')
    }
  }

  return (
    <div>
      <h1>Signin</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('email')}
          type="email"
          placeholder="Email"
          required
        />
        <input
          {...register('password')}
          type="password"
          placeholder="Password"
          required
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  )
}
