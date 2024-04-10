import { FC } from 'react'
import './RegistrationPageInputs.scss'
import Input from '@renderer/components/Input'

interface IRegistrationPageInputs {
  email: string
  setEMail: React.Dispatch<React.SetStateAction<string>>
  password: string
  setPassword: React.Dispatch<React.SetStateAction<string>>
}

const RegistrationPageInputs: FC<IRegistrationPageInputs> = ({
  email,
  password,
  setEMail,
  setPassword
}) => {
  //const [mail, setMail] = useState('')
  //const [password, setPassword] = useState('')
  //const [doublePassword, setDoublePassword] = useState('')

  return (
    <div className="registration_inputs">
      <Input
        value={email}
        setValue={setEMail}
        placeholder="user@gmail.com"
        className="input registration_input"
      />
      <Input
        value={password}
        setValue={setPassword}
        placeholder="●●●●●●●●●●●●●"
        type="password"
        className="input registration_input registration_input--password"
      />
      {/* <Input
        value={doublePassword}
        setValue={setDoublePassword}
        placeholder="●●●●●●●●●●●●●"
        type="password"
        className="input registration_input registration_input--password"
      /> */}

      <div className="registration_forgotten">Забыли пароль?</div>
    </div>
  )
}

export default RegistrationPageInputs
