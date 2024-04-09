import { FC } from 'react'
import './SidebarList.scss'
import { sidebarCards } from '@renderer/utils/sidebarCards'
import SidebarCard from '../SidebarCard/SidebarCard'

interface ISidebarList {
  isMinWidth: boolean
}

const SidebarList: FC<ISidebarList> = ({ isMinWidth }) => {
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
    </ul>
  )
}

export default SidebarList
