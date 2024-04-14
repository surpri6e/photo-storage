import { useSignOut } from 'react-firebase-hooks/auth'
import './ProfilePage.scss'
import '../../styles/libs/ProfileAndSettingsPage.scss'
import { auth } from '@renderer/main'
import { useContext } from 'react'
import { UserContext } from '@renderer/context/UserContext'
import ProfilePageStaticInformation from './ProfilePageStaticInformation/ProfilePageStaticInformation'
import ProfilePageAvatar from './ProfilePageAvatar/ProfilePageAvatar'

const ProfilePage = (): JSX.Element => {
  const [signOut] = useSignOut(auth)
  const { userInfo } = useContext(UserContext)

  console.log(userInfo)

  return (
    <div className="pas">
      <div className="pas_body">
        <div className="pas_title">Профиль</div>
        <ProfilePageAvatar />

        <ProfilePageStaticInformation />

        <div className="profile_buttons">
          <button className="profile_button">Изменить почту</button>
          <button className="profile_button">Изменить пароль</button>
        </div>

        <div className="profile_buttons">
          <button className="profile_button" onClick={() => signOut()}>
            Выйти из аккаунта
          </button>
          <button className="profile_button">Удалить аккаунт</button>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
