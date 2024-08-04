/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import AcademicRegistrations from './Components/AcademicRegistrations';
import AttendanceRegister from './Components/AttendanceRegister';
import CareerChoice from './Components/CareerChoice';
import Courses from './Components/Courses';
import CounsellingDiary from './Components/CounsellingDiary';
import ClubsActivities from './Components/ClubsActivities';
import ExamSection from './Components/ExamSection';
import FeedBack from './Components/FeedBack';
import HostelManagement from './Components/HostelManagement';
import HallTicket from './Components/HallTicket';
import InfrastructureRelated from './Components/InfrastructureRelated';
import Library from './Components/Library';
import MyCGPA from './Components/MyCGPA';
import Login from './Components/Login';
import Nav from './Components/Nav';
import SideBarNav from './Components/SideBarNav';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="content">
          <div className="SideBarNav">
            <SideBarNav/>
          </div>
          <div className="main-content">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="/academic-registrations" element={<AcademicRegistrations />} />
              <Route path="/attendance-register" element={<AttendanceRegister />} />
              <Route path="/career-choice" element={<CareerChoice />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/counselling-diary" element={<CounsellingDiary />} />
              <Route path="/clubs-activities" element={<ClubsActivities />} />
              <Route path="/exam-section" element={<ExamSection />} />
              <Route path="/feedback" element={<FeedBack />} />
              <Route path="/hostel-management" element={<HostelManagement />} />
              <Route path="/hall-ticket" element={<HallTicket />} />
              <Route path="/infrastructure-related" element={<InfrastructureRelated />} />
              <Route path="/library" element={<Library />} />
              <Route path="/my-cgpa" element={<MyCGPA />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
