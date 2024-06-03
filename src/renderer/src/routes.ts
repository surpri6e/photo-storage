import AlbumsPage from './pages/AlbumsPage/AlbumsPage'
import PhotosPage from './pages/PhotosPage/PhotosPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import RegistrationPage from './pages/RegistrationPage/RegistrationPage'
import SearchPage from './pages/SearchPage/SearchPage'
import SettingsPage from './pages/SettingsPage/SettingsPage'
import StarredPage from './pages/StarredPage/StarredPage'
import TrasherPage from './pages/TrasherPage/TrasherPage'
import { IRoute } from './types/IRoute'
import {
  albumsPath,
  photosPath,
  profilePath,
  registrationPath,
  searchPath,
  settingsPath,
  starredPath,
  trasherPath
} from './utils/paths'

export const publicRoutes: IRoute[] = [{ path: registrationPath, element: RegistrationPage }]

export const privateRoutes: IRoute[] = [
  { path: photosPath, element: PhotosPage },
  { path: albumsPath, element: AlbumsPage },
  { path: starredPath, element: StarredPage },
  { path: trasherPath, element: TrasherPage },
  { path: profilePath, element: ProfilePage },
  { path: settingsPath, element: SettingsPage },
  { path: searchPath, element: SearchPage }
]
