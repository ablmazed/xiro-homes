'use server'
import { signIn, signOut } from '@/auth'
import { IUserSignIn } from '@/types'
import bcrypt from 'bcryptjs'
import { IUserSignUp } from '@/types'
import { UserSignUpSchema } from '../validation/validator'
import { formatError } from '../utils'
import { connectToDatabase } from '../mongodb'
import { redirect } from 'next/navigation'
import User, { IUser } from '@/lib/models/User.model'

// GET ONE PROPERTY BY ID

export async function getUser() {
  await connectToDatabase()
  const users = await User.find()

  return {
    user: JSON.parse(JSON.stringify(users)) as IUser[],
  }
}

// CREATE
export async function registerUser(userSignUp: IUserSignUp) {
  try {
    const user = await UserSignUpSchema.parseAsync({
      name: userSignUp.name,
      email: userSignUp.email,
      password: userSignUp.password,
      confirmPassword: userSignUp.confirmPassword,
    })

    await connectToDatabase()
    await User.create({
      ...user,
      password: await bcrypt.hash(user.password, 5),
    })
    return { success: true, message: 'User created successfully' }
  } catch (error) {
    return { success: false, error: formatError(error) }
  }
}

export async function signInWithCredentials(user: IUserSignIn) {
  return await signIn('credentials', { ...user, redirect: false })
}
export const SignOut = async () => {
  const redirectTo = await signOut({ redirect: false })
  redirect(redirectTo.redirect)
}

//SIGNIN-WITH-GOOGLE

export const SignInWithGoogle = async () => {
  await signIn('google')
}
