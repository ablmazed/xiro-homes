import {
  UserSignUpSchema,
  UserInputSchema,
  UserSignInSchema,
} from '@/lib/validation/validator'
import * as z from 'zod'

export type IUserSignUp = z.infer<typeof UserSignUpSchema>
export type IUserInput = z.infer<typeof UserInputSchema>
export type IUserSignIn = z.infer<typeof UserSignInSchema>

export type Data = {
  users: IUserInput[]
}
