import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Home from './Home'
import Login from './Login'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
      <Route index path='/' Component={Home} />
      <Route path='/login' Component={Login} />
      </Routes>
    </Router>
    </>
  )
}

export default App
