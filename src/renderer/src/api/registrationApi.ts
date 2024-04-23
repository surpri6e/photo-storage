import { IRegistrationContext } from '@renderer/types/contexts/IRegistrationContext'
import { validateEmail } from '@renderer/utils/validateEmail'
import { ActionCodeSettings, UserCredential } from 'firebase/auth'
import { UserInfoApi } from './userInfoApi'

export class RegistartionApi {
  public static clearContext = (context: IRegistrationContext): void => {
    context.setEmail('')
    context.setPassword('')
    context.setDoublePassword('')

    context.setEmailError(false)
    context.setPasswordError(false)
    context.setPasswordsEqualsError(false)
  }

  public static createNewAccount = async (
    context: IRegistrationContext,
    cbfunction: (email: string, password: string) => Promise<UserCredential | undefined>
  ): Promise<void> => {
    this.checkOnEmailError(context)

    if (context.password.length < 6) {
      context.setPasswordError(true)
      setTimeout(() => context.setPasswordError(false), 1500)
      return
    }

    if (context.password != context.doublePassword) {
      context.setPasswordsEqualsError(true)
      setTimeout(() => context.setPasswordsEqualsError(false), 1500)
    }

    if (
      !(context.email.length < 5 || !validateEmail(context.email)) &&
      !(context.password.length < 6) &&
      !(context.password != context.doublePassword)
    ) {
      const result = await cbfunction(context.email, context.password)

      if (result) {
        await UserInfoApi.createNewUser(context.email, result.user.uid)
        this.clearContext(context)
      }
    }
  }

  public static logInAccount = async (
    context: IRegistrationContext,
    cbfunction: (email: string, password: string) => Promise<UserCredential | undefined>
  ): Promise<void> => {
    this.checkOnEmailError(context)
    this.checkOnPasswordError(context)

    if (
      !(context.email.length < 5 || !validateEmail(context.email)) &&
      !(context.password.length < 6)
    ) {
      const result = await cbfunction(context.email, context.password)

      if (result) {
        this.clearContext(context)
      }
    }
  }

  public static resetEmail = async (
    context: IRegistrationContext,
    cbfunction: (
      email: string,
      actionCodeSettings?: ActionCodeSettings | undefined
    ) => Promise<boolean>
  ): Promise<boolean> => {
    this.checkOnEmailError(context)

    if (!(context.email.length < 5 || !validateEmail(context.email))) {
      const result = await cbfunction(context.email)

      if (result) {
        this.clearContext(context)
        return true
      }
    }

    return false
  }

  private static checkOnEmailError = (context: IRegistrationContext): void => {
    if (context.email.length < 5 || !validateEmail(context.email)) {
      context.setEmailError(true)
      setTimeout(() => context.setEmailError(false), 1500)
    }
  }

  private static checkOnPasswordError = (context: IRegistrationContext): void => {
    if (context.password.length < 6) {
      context.setPasswordError(true)
      setTimeout(() => context.setPasswordError(false), 1500)
    }
  }
}
