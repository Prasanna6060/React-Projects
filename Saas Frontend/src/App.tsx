import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import SignUpForm from './pages/Signup'
function App() {

  return (
    <>
    <Routes>
    <Route path ='/' element = {<HomePage/>}/>
    <Route path ='/signup' element = {<SignUpForm/>}/>
    </Routes>
    </>
  )
}

export default App
