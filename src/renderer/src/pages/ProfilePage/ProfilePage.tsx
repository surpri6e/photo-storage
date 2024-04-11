import { useSignOut } from 'react-firebase-hooks/auth'
import './ProfilePage.scss'
import { auth } from '@renderer/main'

const ProfilePage = (): JSX.Element => {
  const [signOut] = useSignOut(auth)
  return (
    <div>
      ProfilePage
      <div onClick={() => signOut()}>leave from accout</div>
    </div>
  )
}

export default ProfilePage
