import { HashRouter } from 'react-router-dom'
import MainPart from './components/MainPart'

function App(): JSX.Element {
  return (
    <HashRouter>
      <MainPart />
    </HashRouter>
  )
}

export default App
