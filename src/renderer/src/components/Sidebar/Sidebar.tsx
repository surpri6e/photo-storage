import { useState } from 'react'
import './Sidebar.scss'

const Sidebar = (): JSX.Element => {
  const [isMinWidth, setIsMinWidth] = useState(true)

  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="">123</a>
        </li>
        <li>
          <a href="">123</a>
        </li>
        <li>
          <a href="">123</a>
        </li>
        <li>
          <a href="">123</a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
