import { auth } from '@renderer/main'
import { useSignOut } from 'react-firebase-hooks/auth'

const ProfilePageWrongButtons = (): JSX.Element => {
  const [signOut] = useSignOut(auth)

  return (
    <div className="profile_buttons">
      <p>Важная кнопка:</p>
      <button className="profile_button profile_button--wrong" onClick={() => signOut()}>
        Выйти из аккаунта
      </button>
    </div>
  )
}

export default ProfilePageWrongButtons
