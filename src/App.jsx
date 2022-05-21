import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home/Home'
import { About } from './pages/About/About'
import { Layout } from './components/layout/Layout'

function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={ <Home />}></Route> 
        <Route path="contact-us" element={ <h2>Contact us</h2>} />
        <Route path="about-us" element={ <About/>} />
        <Route path="login" element={ <h2>Login</h2>} />
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
