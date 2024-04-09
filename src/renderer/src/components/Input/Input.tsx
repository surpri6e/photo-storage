import { FC } from 'react'
import './Input.scss'

interface IInput {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  placeholder: string
}

const Input: FC<IInput> = ({ value, setValue, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="input"
      placeholder={placeholder}
    />
  )
}

export default Input
