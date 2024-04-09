import { FC } from 'react'
import './SidebarList.scss'
import { sidebarCards } from '@renderer/utils/sidebarCards'
import SidebarCard from '../SidebarCard/SidebarCard'
import { useIsMinWidthDebounced } from '@renderer/hooks/useIsMinWidthDebounced'

interface ISidebarList {
  isMinWidth: boolean
  setIsMinWidth: React.Dispatch<React.SetStateAction<boolean>>
}

const SidebarList: FC<ISidebarList> = ({ isMinWidth, setIsMinWidth }) => {
  const isMinWidthDebounced = useIsMinWidthDebounced(isMinWidth)

  return (
    <ul className="sidebar_list">
      {sidebarCards.map((card) => (
        <SidebarCard
          image={card.image}
          name={card.name}
          path={card.path}
          isMinWidth={isMinWidth}
          key={card.path}
        />
      ))}

      <li className="sidebar_card sidebar_button">
        <div onClick={() => setIsMinWidth((prev) => !prev)}>{isMinWidthDebounced ? '>' : '<'}</div>
      </li>
    </ul>
  )
}

export default SidebarList
