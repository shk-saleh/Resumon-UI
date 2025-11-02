import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import NotFound from './components/NotFound'
import GetStarted from './components/GetStarted'
import Templates from './components/Templates'
import Support from './components/Support'
import Pricing from './components/Pricing'

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/GetStarted" element={<GetStarted/>} />
          <Route path="/templates" element={<Templates/>} />
          <Route path="/support" element={<Support/>} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="*" element={<NotFound/>} />                       
        </Routes>
      </main>
    </div>
  )
}
export default App