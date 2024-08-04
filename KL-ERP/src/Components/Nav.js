import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import KL_logo from './KL_Logo.png';
import student from './student.png';

const user = {
  logo: KL_logo,
  stu: student
};

function Nav() {
  return (
    <>
      <div className="Nav">
        <img className="img1" src={user.logo} alt="KL University Logo" />
        <h2>Student ERP</h2>
        <div className="student">
          <img className="student1" src={user.stu} alt="Student" />
          <h4 className="id-no">1234567890</h4>
        </div>
      </div>
      <div className="middle">
        <Link to="/"><button>kl-erp</button></Link>
        <Link to="/login" className="btn1"><button>Logout</button></Link>
      </div>
    </>
  );
}

export default Nav;
