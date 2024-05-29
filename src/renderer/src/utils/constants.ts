import { formatBytesToBytes } from 'bytes-transform'

export const VERSION = '1.0.1'

export const sidebarDelay = 200

export const registrationErrorMessage = 'Данный аккаунт уже существует'
export const logInErrorMessage = 'Неверный логин или пароль'
export const emailErrorMessage = 'Неправильная почта'
export const passwordErrorMessage = 'Короткий пароль'

export const maxSizeOfImage = formatBytesToBytes(3, 'MB')
