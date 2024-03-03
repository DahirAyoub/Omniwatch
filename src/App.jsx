import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './components/shared/Layout'
import Dashboard from './components/Dashboard'
import Logs from './components/Logs'
import Users from './components/Users'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="logs" element={<Logs/>}/>
          <Route path="users" element={<Users/>}/>
        </Route>
      </Routes>
    </Router>
  )
}
