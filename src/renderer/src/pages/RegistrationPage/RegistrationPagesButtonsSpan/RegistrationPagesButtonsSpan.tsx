import { FC, useContext } from 'react'
import './RegistrationPagesButtonsSpan.scss'
import { RegistrationContext } from '@renderer/context/RegistrationContext'
import { clearContext } from '@renderer/api/registrationApi'
import { TTypeOfRegistration } from '@renderer/types/TTypeOfRegistration'

interface IRegistrationPagesButtonsSpan {
  children: React.ReactNode
  setRegistrationType: React.Dispatch<React.SetStateAction<TTypeOfRegistration>>
}

const RegistrationPagesButtonsSpan: FC<IRegistrationPagesButtonsSpan> = ({
  children,
  setRegistrationType
}) => {
  const context = useContext(RegistrationContext)
  return (
    <span
      className="registration_span"
      onClick={() => {
        clearContext(context)
        setRegistrationType((prev) => (prev === 'registration' ? 'logIn' : 'registration'))
      }}
    >
      {children}
    </span>
  )
}

export default RegistrationPagesButtonsSpan
