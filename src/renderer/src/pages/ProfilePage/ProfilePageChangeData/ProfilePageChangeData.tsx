import './ProfilePageChangeData.scss'
import { useState } from 'react'
import { TChangeData } from '@renderer/types/TChangeData'
import ProfilePageChangeDataButtons from '../ProfilePageChangeDataButtons'
import ProfilePageChangeDataInputs from '../ProfilePageChangeDataInputs/ProfilePageChangeDataInputs'

const ProfilePageChangeData = (): JSX.Element => {
  const [variable, setVariable] = useState<TChangeData>('closed')

  return (
    <>
      <ProfilePageChangeDataButtons setVariable={setVariable} />

      {!(variable === 'closed') && (
        <div className="profile_data-change">
          <ProfilePageChangeDataInputs variable={variable} setVariable={setVariable} />
        </div>
      )}
    </>
  )
}

export default ProfilePageChangeData
