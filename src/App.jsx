import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import NotFound from './components/404'
import GetStarted from './Pages/GetStarted'
import Pricing from './Pages/Pricing'
import Support from './Pages/Support'
import Templates from './Pages/Templates'
import Dashboard from './Pages/Dashboard'
import { useAuthStore } from './store/useAuthStore'
import initLenis from './lib/lenis'
import ScrollToTop from './components/ScrollToTop'

function App() {

  const { user, token } = useAuthStore();

  useEffect(() => {
    const lenis = initLenis();
    return () => lenis.destroy();
  }, []);
  
  return (
    <div className='bg-(--white-color) min-h-screen overflow-x-hidden'>
        <ScrollToTop/>
        <Routes>    
          <Route path="/" element={<Home />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/support" element={<Support />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/dashboard"
            element={ user && token ? <Dashboard />: <Navigate to="/get-started" replace />} 
          /> 
          <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  )
}
export default App