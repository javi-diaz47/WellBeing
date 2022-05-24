import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home/Home'
import { About } from './pages/About/About'
import { Layout } from './components/layout/Layout'
import { Login } from './pages/Login/Login'
import { Signup } from './pages/Signup/Signup'
import { useUser } from './Hooks/useUser'
import { ImcCalculator } from './pages/ImcCalculator/ImcCalculator'

function App() {

  const {
    user,
    setUser,
    saveUser,
    removeUser,
    error, 
    setError,
    loading, 
    setLoading,
    logged
  } = useUser();
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout user={user} logged={logged} removeUser={removeUser} />}>
          
          <Route index element={ <Home user={user} logged={logged} />}></Route> 
          
          <Route 
            path="login" 
            element={
              <Login 
                user={user}
                setUser={setUser}
                saveUser={saveUser}
                error={error}
                setError={setError}
                loading={loading}
                setLoading={setLoading}
              />} 
          />

          <Route path="sign-up" element={<Signup/>} />
          
          <Route 
            path="cal-imc" 
            element={
              <ImcCalculator 
                user={user} 
                setUser={setUser}
                saveUser={saveUser} 
                error={error}
                setError={setError}
              />} 
          />

          <Route path="contact-us" element={ <h2>Contact us</h2>} />
          <Route path="about-us" element={ <About/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
