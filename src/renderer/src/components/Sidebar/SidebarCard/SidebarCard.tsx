import { FC, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ISidebarCard } from '@renderer/types/ISidebarCard'
import './SidebarCard.scss'
import { useIsMinWidthDebounced } from '@renderer/hooks/useIsMinWidthDebounced'
import { UserContext } from '@renderer/context/UserContext'

interface ISidebarCardSize {
  isMinWidth: boolean
}

const SidebarCard: FC<ISidebarCard & ISidebarCardSize> = ({ image, name, path, isMinWidth }) => {
  const isMinWidthDebounced = useIsMinWidthDebounced(isMinWidth)

  const { userSettings } = useContext(UserContext)

  return (
    <li
      className={
        userSettings?.sidebar === 'open'
          ? 'sidebar_card sidebar_card--debounced'
          : userSettings?.sidebar === 'close'
            ? 'sidebar_card'
            : isMinWidth
              ? 'sidebar_card'
              : 'sidebar_card sidebar_card--debounced'
      }
    >
      <Link to={path}>
        <img src={image} alt={name} />
        {userSettings?.sidebar === 'open'
          ? name
          : userSettings?.sidebar === 'close'
            ? ''
            : isMinWidthDebounced
              ? ''
              : name}
      </Link>
    </li>
  )
}

export default SidebarCard
