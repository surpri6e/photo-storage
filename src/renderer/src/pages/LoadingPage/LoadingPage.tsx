import Loader from '@renderer/components/Loader/Loader'
import './LoadingPage.scss'

const LoadingPage = (): JSX.Element => {
  return (
    <div className="loading">
      <Loader />
    </div>
  )
}

export default LoadingPage
