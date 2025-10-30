import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import NotFound from './components/NotFound'
import GetStarted from './components/GetStarted'

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/GetStarted" element={<GetStarted/>} />
          <Route path="*" element={<NotFound/>} />                       
        </Routes>
      </main>
    </div>
  )
}
export default App