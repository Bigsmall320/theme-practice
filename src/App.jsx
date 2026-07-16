import { Routes, Route } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Settings from './pages/Settings.jsx'
import NotFound from './pages/NotFound.jsx'
import Financials from './pages/Financials.jsx'
import Academics from './pages/Academics.jsx'
import Accommodation from './pages/Accommodation.jsx'

// Route table for the whole app.
// Everything nested under AppLayout renders inside its <Outlet/> (sidebar + header stay put).
export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="financial" element={<Financials />} />
        <Route path="academics" element={<Academics />} />
        <Route path="accommodation" element={<Accommodation />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
