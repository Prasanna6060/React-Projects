import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import SignUpForm from './pages/Signup'
import Dashboard from './pages/Dashboard'
function App() {

  return (
    <>
    <Routes>
    <Route path ='/' element = {<HomePage/>}/>
    <Route path ='/signup' element = {<SignUpForm/>}/>
    <Route path ='/dashboard' element = {<Dashboard/>}/>
    </Routes>
    </>
  )
}

export default App
