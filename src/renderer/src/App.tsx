import Sidebar from './components/Sidebar/Sidebar'

function App(): JSX.Element {
  //const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <Sidebar />
      <div style={{ marginLeft: 100 }}>asdasd</div>
    </>
  )
}

export default App
