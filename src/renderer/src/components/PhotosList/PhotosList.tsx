import { IUserInfoImage } from '@renderer/types/IUserInfo'
import './PhotosList.scss'
import { FC } from 'react'
import PhotoCard from '../PhotoCard/PhotoCard'

interface IPhotosList {
  photos: IUserInfoImage[]
}

const PhotosList: FC<IPhotosList> = ({ photos }) => {
  return (
    <div className="photos-list">
      {/* {photos.map((image) => (
        <PhotoCard imageUrl={image.urlImage} title={image.title} key={image.urlImage} />
      ))} */}
      <PhotoCard imageUrl="https://placehold.co/600x400" title="a" />
      <PhotoCard imageUrl="https://placehold.co/600x400" title="a" />
      <PhotoCard imageUrl="https://placehold.co/600x400" title="a" />
      <PhotoCard imageUrl="https://placehold.co/600x400" title="a" />
      <PhotoCard imageUrl="https://placehold.co/600x400" title="a" />
      <PhotoCard imageUrl="https://placehold.co/600x400" title="a" />
      <PhotoCard imageUrl="https://placehold.co/600x400" title="a" />
      <PhotoCard imageUrl="https://placehold.co/600x400" title="a" />
      <PhotoCard imageUrl="https://placehold.co/600x400" title="a" />
      <PhotoCard imageUrl="https://placehold.co/600x400" title="a" />
      <PhotoCard imageUrl="https://placehold.co/600x400" title="a" />
      <PhotoCard imageUrl="https://placehold.co/600x400" title="a" />
      <PhotoCard imageUrl="https://placehold.co/600x400" title="a" />
      <PhotoCard imageUrl="https://placehold.co/600x400" title="a" />
      <PhotoCard imageUrl="https://placehold.co/600x400" title="a" />
      <PhotoCard imageUrl="https://placehold.co/600x400" title="a" />
      <PhotoCard imageUrl="https://placehold.co/600x400" title="a" />
    </div>
  )
}

export default PhotosList
