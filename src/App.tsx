import Notebook from './components/Notebook'
import PlayerProvider from './context/PlayerProvider'

function App() {
  return (
    <PlayerProvider>
      <Notebook />
    </PlayerProvider>
  )
}

export default App
