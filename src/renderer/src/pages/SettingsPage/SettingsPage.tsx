import { useContext } from 'react'
import './SettingsPage.scss'
import { UserContext } from '@renderer/context/UserContext'

const SettingsPage = (): JSX.Element => {
  const { userSettings } = useContext(UserContext)
  return (
    <div>
      SettingsPage
      <div>показывать название фотографий: {userSettings?.showTitlesOfImages ? 'да' : 'нет'}</div>
    </div>
  )
}

export default SettingsPage
