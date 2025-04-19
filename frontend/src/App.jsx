import { Routes, Route } from 'react-router-dom'
import LatestJobLanding from './Landingpage/JobPages/LatestJobLanding'
import RailwayJob from './Landingpage/JobPages/RailwayJob'
import GovtJobs from './Landingpage/JobPages/GovtJobs'
import BankJobpage from './Landingpage/JobPages/BankJobPage'
import Demopage from './Landingpage/JobPages/DemoPage'
import MainLandingPage from './Landingpage/MainLandingPage'
import NotFoundPage from './Landingpage/NotFoundPage'
import './App.css'
import CurrentSchemePage from './Landingpage/SchemesPages/CurrentSchemePage'
import StateScheme from './Landingpage/SchemesPages/StateScheme'
import BlogHome from './Landingpage/BlogPages/BlogHome'
import BlogDetail from './Landingpage/BlogPages/BlogDetails'



function App() {
  return(
    <>
      <Routes>
        <Route path='/' element={<MainLandingPage />} />
        <Route path='/latest-jobs' element={<LatestJobLanding />} />
        <Route path='/railway-jobs' element={<RailwayJob />} />
        <Route path='/demo' element={<Demopage />} />
        <Route path='/govt-jobs' element={<GovtJobs />} />
        <Route path='/bank-jobs' element={<BankJobpage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/Schemes" element={<CurrentSchemePage />} />
        <Route path="/state-scheme" element={<StateScheme />} />
        <Route path="/blogs" element={<BlogHome />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </>
  )
}

export default App
