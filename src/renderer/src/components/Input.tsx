import { FC } from 'react'
import '../styles/libs/Input.scss'

interface IInput {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>

  placeholder: string
  className: string
  type: React.HTMLInputTypeAttribute
}

const Input: FC<IInput> = ({ value, setValue, placeholder, className, type }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={className}
      placeholder={placeholder}
    />
  )
}

export default Input
