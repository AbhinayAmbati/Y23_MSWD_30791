import React from "react";
import { Link } from "react-router-dom";
import './SideBarNav.css';

function SideBarNav() {
  return (
    <div className="Side-Bar">
      <Link to="/"><button>Home</button></Link>
      <Link to="/academic-registrations"><button>Academic Registrations</button></Link>
      <Link to="/attendance-register"><button>Attendance Register</button></Link>
      <Link to="/career-choice"><button>Career Choice</button></Link>
      <Link to="/courses"><button>Courses</button></Link>
      <Link to="/counselling-diary"><button>Counselling Diary</button></Link>
      <Link to="/clubs-activities"><button>Clubs/Activities</button></Link>
      <Link to="/exam-section"><button>Exam Section</button></Link>
      <Link to="/feedback"><button>FeedBack</button></Link>
      <Link to="/hostel-management"><button>Hostel Management</button></Link>
      <Link to="/hall-ticket"><button>Hall Ticket</button></Link>
      <Link to="/infrastructure-related"><button>Infrastructure Related</button></Link>
      <Link to="/library"><button>Library</button></Link>
      <Link to="/my-cgpa"><button>My CGPA</button></Link>
    </div>
  );
}

export default SideBarNav;
