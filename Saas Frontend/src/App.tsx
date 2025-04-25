import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import SignUpForm from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Layout from './layouts/layout'

function App() {

  return (
    <>
    <Routes>
    <Route path ='/' element = {<Layout><HomePage/></Layout>}/>
    <Route path ='/signup' element = {<Layout><SignUpForm/></Layout>}/>
    <Route path ='/dashboard' element = {<Dashboard/>}/>
    </Routes>
    </>
  )
}

export default App
