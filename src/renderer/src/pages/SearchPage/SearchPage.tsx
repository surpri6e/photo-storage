import { useParams } from 'react-router-dom'
import './SearchPage.scss'
import '../../styles/libs/PagesWithPhotos.scss'
import { useContext } from 'react'
import { UserContext } from '@renderer/context/UserContext'
import PhotosList from '@renderer/components/PhotosList/PhotosList'

const SearchPage = (): JSX.Element => {
  const { keywords } = useParams()
  const { userImages } = useContext(UserContext)

  const searchedImages = userImages.images
    .filter((image) => !image.isInTrasher)
    .filter((image) => image.title.includes(keywords!) || image.dateOfCreate.includes(keywords!))

  /**
     * searchedImages.length !== 0 ? (
    <PhotosList photos={searchedImages} withCreator={false} />
  ) : (
    <div>hhhhui</div>
  )
     */

  return (
    <div className="pwp">
      <div className="pwp_title">По вашему запросу:</div>

      {searchedImages.length !== 0 ? (
        <PhotosList photos={searchedImages} withCreator={false} />
      ) : (
        <div className="pwp_message">По вашему запросу ничего не найдено</div>
      )}
    </div>
  )
}

export default SearchPage
