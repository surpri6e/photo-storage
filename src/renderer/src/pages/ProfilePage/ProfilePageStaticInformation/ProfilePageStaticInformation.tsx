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
      <div className="profile_block">Дата создания: {userInfo?.dateOfCreate}</div>
      <div className="profile_block">Ваш уникальный айди: {userInfo?.id}</div>
      <div className="profile_block">Первая почта: {userInfo?.firstEmail}</div>
    </>
  )
}

export default ProfilePageStaticInformation
