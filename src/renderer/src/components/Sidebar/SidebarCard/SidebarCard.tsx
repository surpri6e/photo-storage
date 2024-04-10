import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ISidebarCard } from '@renderer/types/ISidebarCard'
import './SidebarCard.scss'
import { useIsMinWidthDebounced } from '@renderer/hooks/useIsMinWidthDebounced'

interface ISidebarCardSize {
  isMinWidth: boolean
}

const SidebarCard: FC<ISidebarCard & ISidebarCardSize> = ({ image, name, path, isMinWidth }) => {
  const isMinWidthDebounced = useIsMinWidthDebounced(isMinWidth)

  return (
    <li className={isMinWidth ? 'sidebar_card' : 'sidebar_card sidebar_card--debounced'}>
      <Link to={path}>
        <img src={image} alt={name} />
        {isMinWidthDebounced ? '' : name}
      </Link>
    </li>
  )
}

export default SidebarCard
