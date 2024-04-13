import { useSignOut } from 'react-firebase-hooks/auth'
import './ProfilePage.scss'
import { auth } from '@renderer/main'
import { useContext } from 'react'
import { UserContext } from '@renderer/context/UserContext'

const ProfilePage = (): JSX.Element => {
  const [signOut] = useSignOut(auth)
  const { userInfo } = useContext(UserContext)

  console.log(userInfo)

  return (
    <div>
      ProfilePage
      <div onClick={() => signOut()}>leave from accout</div>
      <div>vip status: {userInfo?.vipStatus ? 'yes' : 'no'}</div>
    </div>
  )
}

export default ProfilePage
