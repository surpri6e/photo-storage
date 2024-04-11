import { FC } from 'react'
import './ErrorPage.scss'

interface IErrorPage {
  errorMessage: string
}

const ErrorPage: FC<IErrorPage> = ({ errorMessage }) => {
  return (
    <div className="error">
      <div className="error_message">Произошел сбой, ошибка - {errorMessage}.</div>
    </div>
  )
}

export default ErrorPage
