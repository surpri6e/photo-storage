import './ProfilePage.scss'
import '../../styles/libs/ProfileAndSettingsPage.scss'
import ProfilePageStaticInformation from './ProfilePageStaticInformation/ProfilePageStaticInformation'
import ProfilePageAvatar from './ProfilePageAvatar/ProfilePageAvatar'
import ProfilePageWrongButtons from './ProfilePageWrongButtons'
import ProfilePageChangeData from './ProfilePageChangeData/ProfilePageChangeData'

const ProfilePage = (): JSX.Element => {
  return (
    <div className="pas">
      <div className="pas_body">
        <div className="pas_title">Профиль</div>
        <ProfilePageAvatar />

        <ProfilePageStaticInformation />

        <ProfilePageChangeData />

        <ProfilePageWrongButtons />
      </div>
    </div>
  )
}

export default ProfilePage
