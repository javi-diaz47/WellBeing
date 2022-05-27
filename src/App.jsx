import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home/Home'
import { About } from './pages/About/About'
import { Layout } from './components/layout/Layout'
import { Login } from './pages/Login/Login'
import { Signup } from './pages/Signup/Signup'
import { useUser } from './Hooks/useUser'
import { ImcCalculator } from './pages/ImcCalculator/ImcCalculator'
import { ContactUs } from './pages/ContactUs/ContactUs'

function App() {

  const {
    user,
    setUser,
    saveUser,
    removeUser,
    saveMeasuresDB,
    error, 
    setError,
    loading, 
    setLoading,
    isLogged,
    setIsLogged,
  } = useUser();

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={
            <Layout 
              user={user}
              setUser={setUser} 
              isLogged={isLogged}
              setIsLogged={setIsLogged} 
              removeUser={removeUser} 
            />
          }
        >
          <Route 
            index 
            element={ 
              <Home 
                user={user} 
                isLogged={isLogged}
              />
            }
          />
          
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

          <Route 
            path="sign-up" 
            element={
              <Signup
                loading={loading}
                setLoading={setLoading}
                error={error}
                setError={setError}
              />
              } 
          />
          
          <Route 
            path="cal-imc" 
            element={
              <ImcCalculator 
                user={user} 
                setUser={setUser}
                saveUser={saveUser} 
                saveMeasuresDB={saveMeasuresDB}
                error={error}
                setError={setError}
              />} 
          />

          <Route path="contact-us" 
            element={ 
              <ContactUs 
                loading={loading} 
                setLoading={setLoading}
              />
            } 
          />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
