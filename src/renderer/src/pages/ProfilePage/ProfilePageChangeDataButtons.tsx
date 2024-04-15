import { auth } from '@renderer/main'
import { TChangeData } from '@renderer/types/TChangeData'
import React, { FC } from 'react'
import { useDeleteUser } from 'react-firebase-hooks/auth'

interface IProfilePageChangeDataButtons {
  setVariable: React.Dispatch<React.SetStateAction<TChangeData>>
}

const ProfilePageChangeDataButtons: FC<IProfilePageChangeDataButtons> = ({ setVariable }) => {
  const [deleteUser, loading, error] = useDeleteUser(auth)

  return (
    <div className="profile_buttons">
      <button
        className="profile_button profile_button--orange"
        onClick={() => setVariable('email')}
      >
        Изменить почту
      </button>
      <button
        className="profile_button profile_button--orange"
        onClick={() => setVariable('password')}
      >
        Изменить пароль
      </button>
    </div>
  )
}

export default ProfilePageChangeDataButtons
