import { useState } from 'react'
import './Header.scss'
import Input from '../Input'
import HeaderLogo from './HeaderLogo/HeaderLogo'
import HeaderRight from './HeaderRight/HeaderRight'
import { useNavigate } from 'react-router-dom'

const Header = (): JSX.Element => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  return (
    <div className="header">
      <HeaderLogo />
      <div className="header_center">
        <Input
          type="text"
          value={search}
          setValue={setSearch}
          placeholder="Что найдем?"
          className="input header_input"
        />
        <button
          className="header_button"
          onClick={() => {
            navigate(`search/${search}`)
            setSearch('')
          }}
        >
          Найти
        </button>
      </div>
      <HeaderRight />
    </div>
  )
}

export default Header
