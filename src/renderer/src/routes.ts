import AlbumsPage from './pages/AlbumsPage/AlbumsPage'
import PhotosPage from './pages/PhotosPage/PhotosPage'
import RegistrationPage from './pages/RegistrationPage/RegistrationPage'
import StarredPage from './pages/StarredPage/StarredPage'
import TrasherPage from './pages/TrasherPage/TrasherPage'
import { IRoute } from './types/IRoute'
import { albumsPath, photosPath, registrationPath, starredPath, trasherPath } from './utils/paths'

export const publicRoutes: IRoute[] = [{ path: registrationPath, element: RegistrationPage }]

export const privateRoutes: IRoute[] = [
  { path: photosPath, element: PhotosPage },
  { path: albumsPath, element: AlbumsPage },
  { path: starredPath, element: StarredPage },
  { path: trasherPath, element: TrasherPage }
]
