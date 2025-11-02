import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import NotFound from './components/404'
import GetStarted from './Pages/GetStarted'

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