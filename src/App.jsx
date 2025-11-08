import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import NotFound from './components/404'
import GetStarted from './Pages/GetStarted'
import Pricing from './Pages/Pricing'
import Support from './Pages/Support'
import Templates from './Pages/Templates'

function App() {
  return (
    <div className='bg-(--white-color) min-h-screen overflow-x-hidden'>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/GetStarted" element={<GetStarted/>} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/support" element={<Support/>} />
          <Route path="/templates" element={<Templates/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </main>
    </div>
  )
}
export default App