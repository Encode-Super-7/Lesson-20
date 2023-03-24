import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Web3Provider } from './providers/Web3'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Web3Provider>
    <div className="App">
      <Navbar/>
      Lottery
    </div>
    </Web3Provider>
  )
}

export default App
