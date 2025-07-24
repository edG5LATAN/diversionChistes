import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
     <BrowserRouter>
     <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='*' element={<Error />}/>        
      </Routes>
      <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
