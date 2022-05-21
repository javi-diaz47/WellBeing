import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home/Home'
import { About } from './pages/About/About'
import { Layout } from './components/layout/Layout'
import { Login } from './pages/Login/Login'
import { Signup } from './pages/Signup/Signup'
import { useUser } from './Hooks/useUser'

function App() {

  const {
    user,
    saveUser, 
    loading, 
    error, 
    login
  } = useUser();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout user={user} login={login}/>}>
          <Route index element={ <Home user={user} login={login} />}></Route> 
          <Route path="contact-us" element={ <h2>Contact us</h2>} />
          <Route path="about-us" element={ <About/>} />
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<Signup/>} />
          <Route path="cal-imc" element={<h2>Calcular IMC</h2>} />
        </Route>
        {/* <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
    </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
