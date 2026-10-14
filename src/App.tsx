import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import VisionMission from './pages/VisionMission'
import Events from './pages/Events'
import Gallery from './pages/Gallery'
import Impact360 from './pages/Impact360'
import BirthdayWall from './pages/BirthdayWall'
import Login from './pages/Login'
import Vijayibhawa from './pages/Vijayibhawa'
import AlumniDirectory from './pages/portal/AlumniDirectory'
import JobPortal from './pages/portal/JobPortal'
import AlumniMeet from './pages/portal/AlumniMeet'
import SupportFund from './pages/portal/SupportFund'
import MentorshipLog from './pages/portal/MentorshipLog'
import SiteSettings from './pages/portal/SiteSettings'
import { useAuth } from './context/AuthContext'
import { useSiteSettings } from './context/SiteSettingsContext'

function BirthdayWallGate() {
  const { role } = useAuth()
  const { birthdayWallEnabled, loading } = useSiteSettings()
  if (loading) return null
  if (!birthdayWallEnabled && role !== 'admin') return <Navigate to="/" replace />
  return <BirthdayWall />
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="vision-mission" element={<VisionMission />} />
        <Route path="events" element={<Events />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="impact360" element={<Impact360 />} />
        <Route path="birthday-wall" element={<BirthdayWallGate />} />
        <Route path="vijayibhawa" element={<Vijayibhawa />} />
        <Route path="login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="portal/alumni" element={<AlumniDirectory />} />
          <Route path="portal/jobs" element={<JobPortal />} />
          <Route path="portal/alumni-meet" element={<AlumniMeet />} />
          <Route path="portal/support-fund" element={<SupportFund />} />
          <Route path="portal/mentorship" element={<MentorshipLog />} />
          <Route path="portal/settings" element={<SiteSettings />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
