import { FC, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ISidebarCard } from '@renderer/types/ISidebarCard'
import './SidebarCard.scss'
import { useIsMinWidthDebounced } from '@renderer/hooks/useIsMinWidthDebounced'
import { UserContext } from '@renderer/context/UserContext'
import { SidebarContext } from '@renderer/context/SidebarContext'

const SidebarCard: FC<ISidebarCard> = ({ image, name, path }) => {
  const { isMinWidth } = useContext(SidebarContext)
  const { userSettings } = useContext(UserContext)

  const isMinWidthDebounced = useIsMinWidthDebounced(isMinWidth)

  return (
    <li
      className={
        userSettings.sidebar === 'open'
          ? 'sidebar_card sidebar_card--debounced'
          : userSettings.sidebar === 'close'
            ? 'sidebar_card'
            : isMinWidth
              ? 'sidebar_card'
              : 'sidebar_card sidebar_card--debounced'
      }
    >
      <Link to={path}>
        <img src={image} alt={name} />
        {userSettings.sidebar === 'open'
          ? name
          : userSettings.sidebar === 'close'
            ? ''
            : isMinWidthDebounced
              ? ''
              : name}
      </Link>
    </li>
  )
}

export default SidebarCard
