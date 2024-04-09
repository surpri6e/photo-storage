import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ISidebarCard } from '@renderer/types/ISidebarCard'
import './SidebarCard.scss'

interface ISidebarCardSize {
  isMinWidth: boolean
}

const SidebarCard: FC<ISidebarCard & ISidebarCardSize> = ({ image, name, path, isMinWidth }) => {
  const [isMinWidthHere, setIsMinWidthHere] = useState(true)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    if (!isMinWidth) {
      timeout = setTimeout(() => {
        setIsMinWidthHere(isMinWidth)
      }, 200) // вынести в константы
    } else {
      setIsMinWidthHere(isMinWidth)
    }

    return () => clearTimeout(timeout)
  }, [isMinWidth])

  return (
    <li className="sidebar_card">
      <Link to={path}>
        <img src={image} alt={name} />
        {isMinWidthHere ? '' : name}
      </Link>
    </li>
  )
}

export default SidebarCard
