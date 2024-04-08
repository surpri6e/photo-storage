import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ISidebarCard } from '@renderer/types/ISidebarCard'
import './SidebarCard.scss'

interface ISidebarCardSize {
  isMinWidth: boolean
}

const SidebarCard: FC<ISidebarCard & ISidebarCardSize> = ({ image, name, path, isMinWidth }) => {
  return (
    <li>
      <Link to={path}>
        <img src={image} alt={name} />
        {isMinWidth ? '' : name}
      </Link>
    </li>
  )
}

export default SidebarCard
