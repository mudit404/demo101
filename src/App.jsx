import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MuiButton from './components/MuiButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MuiButton />
    </>
  )
}

export default App
