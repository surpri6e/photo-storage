import { useState } from 'react'
import './Header.scss'
import Input from '../Input'
import HeaderLogo from './HeaderLogo/HeaderLogo'
import HeaderRight from './HeaderRight/HeaderRight'

const Header = (): JSX.Element => {
  const [search, setSearch] = useState('')

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
        <button className="header_button">Найти</button>
      </div>
      <HeaderRight />
    </div>
  )
}

export default Header
