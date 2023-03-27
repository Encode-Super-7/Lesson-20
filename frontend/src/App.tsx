import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Navbar } from './components/Navbar'
import { Web3Provider } from './providers/Web3'


function App() {
  

  return (
    <Web3Provider>
    
      <Navbar/>
      Lottery
   
    </Web3Provider>
  )
}

export default App
