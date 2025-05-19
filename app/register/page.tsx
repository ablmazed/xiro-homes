'use client'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useState } from 'react'
// import { useRouter } from 'next/navigation'

type SignupForm = {
  name: string
  email: string
  password: string
}

export default function Signup() {
  const { register, handleSubmit } = useForm<SignupForm>()
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  // const router = useRouter()

  const onSubmit = async (data: SignupForm) => {
    try {
      const response = await axios.post('/api/auth/signup', data)
      setMessage(response.data.message)
      console.log(response)

      // router.push('/signin')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.response?.data?.message || 'Something went wrong')
    }
  }

  return (
    <div>
      <h1>Signup</h1>

      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} placeholder="Name" required />
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
        <button type="submit">Sign Up</button>
        <p>{message}</p>
      </form>
    </div>
  )
}
