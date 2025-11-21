import { Routes, Route, Navigate } from 'react-router-dom'

// App Pages
import DashboardPage from '@/pages/app/DashboardPage'
import AnalyticsPage from '@/pages/app/AnalyticsPage'
import SOPsPage from '@/pages/app/SOPsPage'
import TemplatesPage from '@/pages/app/TemplatesPage'
import AccountPage from '@/pages/app/AccountPage'

function App() {
  return (
    <Routes>
      {/* Redirect root to dashboard */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      
      {/* Dashboard Routes - No Auth Required */}
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/analytics" element={<AnalyticsPage />} />
      <Route path="/reports" element={<SOPsPage />} />
      <Route path="/data" element={<TemplatesPage />} />
      <Route path="/settings" element={<AccountPage />} />

      {/* Catch all route */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  )
}

export default App