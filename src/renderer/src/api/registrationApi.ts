import { IRegistrationContext } from '@renderer/types/contexts/IRegistrationContext'
import { validateEmail } from '@renderer/utils/validateEmail'
import { ActionCodeSettings, UserCredential } from 'firebase/auth'
import UserInfoApi from './userInfoApi'
import { throwError } from '@renderer/utils/throwError'
import { errorTimeout } from '@renderer/utils/errorsTimeout'

type cbDefaultSignature = (email: string, password: string) => Promise<UserCredential | undefined>
type cbResetPasswordSignature = (
  email: string,
  actionCodeSettings?: ActionCodeSettings | undefined
) => Promise<boolean>

export default class RegistartionApi {
  public static createNewAccount = async (
    context: IRegistrationContext,
    cb: cbDefaultSignature
  ): Promise<void> => {
    this.checkOnEmailError(context)

    if (context.password.length < 6) {
      errorTimeout(context.setPasswordError, 1000)
      return
    }

    if (context.password != context.doublePassword) {
      errorTimeout(context.setPasswordsEqualsError, 1000)
    }

    try {
      if (
        !this.checkOnEmailError(context) &&
        !this.checkOnPasswordError(context) &&
        !(context.password != context.doublePassword)
      ) {
        const resultOfRegistration = await cb(context.email, context.password)

        if (resultOfRegistration) {
          await UserInfoApi.createNewUser(context.email, resultOfRegistration.user.uid)
          this.clearContext(context)
        }
      }
    } catch (error: unknown) {
      throwError(error)
    }
  }

  public static logInAccount = async (
    context: IRegistrationContext,
    cb: cbDefaultSignature
  ): Promise<void> => {
    this.checkOnEmailError(context)
    this.checkOnPasswordError(context)

    try {
      if (!this.checkOnEmailError(context) && !this.checkOnPasswordError(context)) {
        const result = await cb(context.email, context.password)

        if (result) {
          this.clearContext(context)
        }
      }
    } catch (error: unknown) {
      throwError(error)
    }
  }

  public static resetPassword = async (
    context: IRegistrationContext,
    cb: cbResetPasswordSignature
  ): Promise<boolean> => {
    this.checkOnEmailError(context)

    try {
      if (!this.checkOnEmailError(context)) {
        const result = await cb(context.email)

        if (result) {
          this.clearContext(context)
          return true
        }
      }
    } catch (error: unknown) {
      throwError(error)
    }

    return false
  }

  public static clearContext = (context: IRegistrationContext): void => {
    context.setEmail('')
    context.setPassword('')
    context.setDoublePassword('')

    context.setEmailError(false)
    context.setPasswordError(false)
    context.setPasswordsEqualsError(false)
  }

  private static checkOnEmailError = (context: IRegistrationContext): boolean => {
    if (context.email.length < 5 || !validateEmail(context.email)) {
      errorTimeout(context.setEmailError, 1000)
    }

    return context.email.length < 5 || !validateEmail(context.email)
  }

  private static checkOnPasswordError = (context: IRegistrationContext): boolean => {
    if (context.password.length < 6) {
      errorTimeout(context.setPasswordError, 1000)
    }

    return context.password.length < 6
  }
}
