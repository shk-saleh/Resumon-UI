import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import NotFound from './components/404'
import GetStarted from './Pages/GetStarted'
import Pricing from './Pages/Pricing'
import Support from './Pages/Support'
import Templates from './Pages/Templates'
import Dashboard from './Pages/Dashboard'
import BuildResume from './Pages/BuildResume'
import { useAuthStore } from './store/useAuthStore'
import { useResumeStore } from "./store/useResumeStore";

function App() {

  const { user, token } = useAuthStore();
  const { hasBuiltResume } = useResumeStore();
  
  return (
    <div className='bg-(--white-color) min-h-screen overflow-x-hidden'>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/support" element={<Support />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/build-resume" element={<BuildResume />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route
            path="/buildResume"
            element={ user && token ? <BuildResume /> : <Navigate to="/GetStarted" replace /> } 
          />
          <Route path="/dashboard"
            element={ user && token && hasBuiltResume ? <Dashboard />: <Navigate to="/buildResume" replace />} 
          /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}
export default App