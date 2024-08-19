import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import SearchBar from './components/SearchBar'
//import Card from './components/Card'
import CardGrid from './components/CardGrid'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <SearchBar/>
      
      <CardGrid/>
      <Footer/>
    </>
  )
}

export default App
