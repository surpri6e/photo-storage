import { UserContext } from '@renderer/context/UserContext'
import './ProfilePageStaticInformation.scss'
import { useContext } from 'react'

const ProfilePageStaticInformation = (): JSX.Element => {
  const { userInfo } = useContext(UserContext)

  return (
    <>
      <div className="profile_block">
        Вип статус:{' '}
        <span className={userInfo?.vipStatus ? 'vip-status--yes' : 'vip-status--no'}>
          {userInfo?.vipStatus ? 'есть' : 'нет'}
        </span>
      </div>
      <div className="profile_block">
        Дата создания: <span>{userInfo?.dateOfCreate}</span>
      </div>
      <div className="profile_block">
        Ваш уникальный айди: <span className="profile_id">{userInfo?.id}</span>
      </div>
      <div className="profile_block">
        Первая почта: <span className="profile_email">{userInfo?.firstEmail}</span>
      </div>
    </>
  )
}

export default ProfilePageStaticInformation
