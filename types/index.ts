import {
  UserSignUpSchema,
  UserInputSchema,
  UserSignInSchema,
  PropertyInputSchema,
  SettingInputSchema,
  HeaderMenuSchema,
  FooterMenuSchema,
  HomeCardSchema,
} from '@/lib/validation/validator'
import * as z from 'zod'

export type IUserSignUp = z.infer<typeof UserSignUpSchema>
export type IUserInput = z.infer<typeof UserInputSchema>
export type IUserSignIn = z.infer<typeof UserSignInSchema>
export type IPropertyInput = z.infer<typeof PropertyInputSchema>
export type ISettingInput = z.infer<typeof SettingInputSchema>

export type IHeaderMenu = z.infer<typeof HeaderMenuSchema>
export type IFooterMenu = z.infer<typeof FooterMenuSchema>
export type IHomeCard = z.infer<typeof HomeCardSchema>

export type Data = {
  users: IUserInput[]
  settings: ISettingInput[]
  property: IPropertyInput[]

  headerMenu: IHeaderMenu[]
  footerMenu: IFooterMenu[]
  homeCard: IHomeCard[]
}
