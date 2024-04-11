import { IRegistrationContext } from '@renderer/types/contexts/IRegistrationContext'
import { validateEmail } from '@renderer/utils/validateEmail'
import { UserCredential } from 'firebase/auth'

export const createNewAccount = async (
  context: IRegistrationContext,
  cbfunction: (email: string, password: string) => Promise<UserCredential | undefined>
): Promise<void> => {
  if (context.email.length < 5 || !validateEmail(context.email)) {
    context.setEmailError(true)
    setTimeout(() => context.setEmailError(false), 1500)
  }

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
    await cbfunction(context.email, context.password)
  }
}

export const logInAccount = async (
  context: IRegistrationContext,
  cbfunction: (email: string, password: string) => Promise<UserCredential | undefined>
): Promise<void> => {
  console.log(context, cbfunction)
}
