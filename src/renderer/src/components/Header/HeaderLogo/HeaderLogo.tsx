import { Link } from 'react-router-dom'
import './HeaderLogo.scss'
import { photosPath } from '@renderer/utils/paths'

const HeaderLogo = (): JSX.Element => {
  return (
    <Link to={photosPath} className="header_logo">
      Surphoto
    </Link>
  )
}

export default HeaderLogo
