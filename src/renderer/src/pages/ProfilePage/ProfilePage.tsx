import { useSignOut } from 'react-firebase-hooks/auth'
import './ProfilePage.scss'
import '../../styles/libs/ProfileAndSettingsPage.scss'
import { auth } from '@renderer/main'
import { useContext } from 'react'
import { UserContext } from '@renderer/context/UserContext'

const ProfilePage = (): JSX.Element => {
  const [signOut] = useSignOut(auth)
  const { userInfo } = useContext(UserContext)

  console.log(userInfo)

  return (
    <div className="pas">
      <div className="pas_body">
        <div className="pas_title">Профиль</div>
        <div onClick={() => signOut()}>leave from accout</div>
        <div>vip status: {userInfo?.vipStatus ? 'yes' : 'no'}</div>
        <button className="profile_button">Выйти из аккаунта</button>
        <button className="profile_button">Удалить аккаунт</button>
      </div>
    </div>
  )
}

export default ProfilePage
