import { UserContext } from '@renderer/context/UserContext'
import './ProfilePageStaticInformation.scss'
import { useContext, useState } from 'react'
import HelpWindow from '@renderer/components/HelpWindow/HelpWindow'

const ProfilePageStaticInformation = (): JSX.Element => {
  const { userInfo } = useContext(UserContext)
  const [isClicked, setIsClicked] = useState(false)

  return (
    <>
      <div className="profile_block">
        Вип статус:{' '}
        <span className={userInfo.vipStatus ? 'vip-status--yes' : 'vip-status--no'}>
          {userInfo.vipStatus ? 'есть' : 'нет'}
        </span>
      </div>

      <div className="profile_block">
        Дата создания: <span>{userInfo.dateOfCreate}</span>
      </div>

      <div className="profile_block">
        Айди:{' '}
        <span
          className="profile_id"
          onClick={() =>
            navigator.clipboard.writeText(userInfo.id).then(() => {
              setIsClicked(true)
              setTimeout(() => setIsClicked(false), 1000)
            })
          }
        >
          {userInfo.id}
        </span>
        {isClicked && <HelpWindow message="Айди скопировано" isHelpful />}
      </div>

      <div className="profile_block">
        Первая почта: <span className="profile_email">{userInfo.firstEmail}</span>
      </div>
    </>
  )
}

export default ProfilePageStaticInformation
