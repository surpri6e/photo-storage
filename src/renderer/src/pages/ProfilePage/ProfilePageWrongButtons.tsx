import { auth } from '@renderer/main'
import { useSignOut } from 'react-firebase-hooks/auth'

const ProfilePageWrongButtons = (): JSX.Element => {
  const [signOut] = useSignOut(auth)
  //const [deleteUser, loading, error] = useDeleteUser(auth)
  //for delete double click
  return (
    <div className="profile_buttons">
      <p>Важные кнопки:</p>
      <button className="profile_button profile_button--wrong" onClick={() => signOut()}>
        Выйти из аккаунта
      </button>
      <button className="profile_button profile_button--wrong">Удалить аккаунт</button>
    </div>
  )
}

export default ProfilePageWrongButtons
