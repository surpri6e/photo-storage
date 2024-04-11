import { FC, useContext } from 'react'
import './RegistrationPagesButtonsSpan.scss'
import { RegistrationContext } from '@renderer/context/RegistrationContext'

interface IRegistrationPagesButtonsSpan {
  children: React.ReactNode
  setIsRegistration: React.Dispatch<React.SetStateAction<boolean>>
}

const RegistrationPagesButtonsSpan: FC<IRegistrationPagesButtonsSpan> = ({
  children,
  setIsRegistration
}) => {
  const { setEmail, setPassword, setDoublePassword } = useContext(RegistrationContext)
  return (
    <span
      onClick={() => {
        setEmail('')
        setPassword('')
        setDoublePassword('')
        setIsRegistration((prev) => !prev)
      }}
    >
      {children}
    </span>
  )
}

export default RegistrationPagesButtonsSpan
