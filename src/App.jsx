import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './components/LoginPageFolder/LoginPage'
import SignUp from './components/SignUpFolder/SignUp'
import HomePage from './components/HomePageFolder/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signUp" element={<SignUp/>} />
      <Route path="/home" element={<HomePage/>} />
     </Routes>
    </>
  )
}

export default App
