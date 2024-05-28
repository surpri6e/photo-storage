import { FC } from 'react'
import './ErrorPage.scss'

interface IErrorPage {
  errorMessage: string
}

const ErrorPage: FC<IErrorPage> = ({ errorMessage }) => {
  return (
    <div className="error">
      <p className="error_message">Произошел сбой, ошибка - {errorMessage}.</p>
    </div>
  )
}

export default ErrorPage
