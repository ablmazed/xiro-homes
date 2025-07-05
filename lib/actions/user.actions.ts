'use server'
import { signIn, signOut } from '@/auth'
import { redirect } from 'next/navigation'
import bcrypt from 'bcryptjs'
import { IUserSignIn, IUserSignUp } from '@/types'
import { UserSignUpSchema } from '../validation/validator'
import { formatError } from '../utils'
import { connectToDatabase } from '../mongodb'
import User, { IUser } from '@/lib/models/User.model'
//SIGNIN- SIGNOUT
export async function signInWithCredentials(user: IUserSignIn) {
  return await signIn('credentials', { ...user, redirect: false })
  // const result = await signIn('credentials', {
  //   email: user.email,
  //   password: user.password,
  //   redirect: false,
  // })
  // console.log('signIn result', result)
}

export const SignInWithGoogle = async () => {
  await signIn('google')
}

export const SignOut = async () => {
  const redirectTo = await signOut({ redirect: false })
  redirect(redirectTo.redirect)
}

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
