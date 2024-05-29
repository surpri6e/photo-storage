import { useContext } from 'react'
import './SidebarList.scss'
import { sidebarCards } from '@renderer/utils/sidebarCards'
import SidebarCard from '../SidebarCard/SidebarCard'
import { useIsMinWidthDebounced } from '@renderer/hooks/useIsMinWidthDebounced'
import { UserContext } from '@renderer/context/UserContext'
import { SidebarContext } from '@renderer/context/SidebarContext'

const SidebarList = (): JSX.Element => {
  const { isMinWidth, setIsMinWidth } = useContext(SidebarContext)
  const { userSettings } = useContext(UserContext)

  const isMinWidthDebounced = useIsMinWidthDebounced(isMinWidth)

  return (
    <ul className="sidebar_list">
      {sidebarCards.map((card) => (
        <SidebarCard image={card.image} name={card.name} path={card.path} key={card.path} />
      ))}

      {userSettings.sidebar === 'all' && (
        <li className="sidebar_card sidebar_button" onClick={() => setIsMinWidth((prev) => !prev)}>
          {isMinWidthDebounced ? '>' : '<'}
        </li>
      )}
    </ul>
  )
}

export default SidebarList
