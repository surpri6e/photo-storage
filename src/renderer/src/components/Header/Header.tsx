import { useState } from 'react'
import './Header.scss'
import HeaderInput from '../Input/Input'
import HeaderLogo from './HeaderLogo/HeaderLogo'
import HeaderRight from './HeaderRight/HeaderRight'

const Header = (): JSX.Element => {
  const [search, setSearch] = useState('')
  return (
    <div className="header">
      <HeaderLogo />
      <HeaderInput value={search} setValue={setSearch} placeholder="Что найдем?" />
      <HeaderRight />
    </div>
  )
}

export default Header
