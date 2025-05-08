// React Router Imports
import { Routes, Route } from 'react-router-dom';

// Job Pages
import LatestJobLanding from './Landingpage/JobPages/LatestJobLanding';
import RailwayJob from './Landingpage/JobPages/RailwayJob';
import GovtJobs from './Landingpage/JobPages/GovtJobs';
import BankJobpage from './Landingpage/JobPages/BankJobPage';
import Demopage from './Landingpage/JobPages/DemoPage';

// Scheme Pages
import CurrentSchemePage from './Landingpage/SchemesPages/CurrentSchemePage';
import StateScheme from './Landingpage/SchemesPages/StateScheme';

// Blog Pages
import BlogHome from './Landingpage/BlogPages/BlogHome';
import BlogDetail from './Landingpage/BlogPages/BlogDetails';
import SchemeBlog from './Landingpage/BlogPages/SchemeBlog';
import JobBlogs from './Landingpage/BlogPages/JobBlogs';

// Other Pages
import MainLandingPage from './Landingpage/MainLandingPage';
import About from './Landingpage/About';
import NotFoundPage from './Landingpage/NotFoundPage';

// Styles
import './App.css';

// Admin Routes
import Admin from './pages/Admin/Admin';
import Home from './Components/AdminComponents/Home';
import ManageJobs from './pages/Admin/JobManager';
import ManageBlogs from './pages/Admin/BlogManager';
import SchemeManager from './pages/Admin/SchemeManager';
import AdminSettings from './pages/Admin/AdminSettings';

function App() {
  return (
    <>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<MainLandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFoundPage />} />

        {/* Job Pages */}
        <Route path="/current-jobs" element={<LatestJobLanding />} />
        <Route path="/railway-jobs" element={<RailwayJob />} />
        <Route path="/govt-jobs" element={<GovtJobs />} />
        <Route path="/bank-jobs" element={<BankJobpage />} />
        <Route path="/demo" element={<Demopage />} />

        {/* Scheme Pages */}
        <Route path="/current-schemes" element={<CurrentSchemePage />} />
        <Route path="/state-scheme" element={<StateScheme />} />

        {/* Blog Pages */}
        <Route path="/blogs" element={<BlogHome />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/jobs-blogs" element={<JobBlogs />} />
        <Route path="/scheme-blogs" element={<SchemeBlog />} />


        {/* Admin Panel   */}
        <Route path="/admin" element={<Admin />}>
          <Route path='dashboard' element={<Home />} />
          <Route path='jobs' element={<ManageJobs />} />
          <Route path='schemes' element={<SchemeManager />} />
          <Route path='blogs' element={<ManageBlogs />} />
          <Route path='settings' element={<AdminSettings />} />
           
        </Route>
      </Routes>
    </>
  );
}

export default App;
