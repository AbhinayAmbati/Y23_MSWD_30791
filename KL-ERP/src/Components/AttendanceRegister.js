import React from "react";
import './AttendanceRegister.css';

function AttendanceRegister() {
    return (
        <div className="input-container">
            <div className="input">
                <form action="/submit" method="post">
                    <label htmlFor="year-dropdown">Attendance Register</label>
                    <br></br>
                    <select id="year-dropdown" name="year">
                        <option value="option1">Select Year</option>
                        <option value="option2">2022-2023</option>
                        <option value="option3">2023-2024</option>
                        <option value="option4">2024-2025</option>
                    </select>
                    <br></br>
                    <select id="semester-dropdown" name="semester">
                        <option value="option1">Select Semester</option>
                        <option value="option2">Odd Sem</option>
                        <option value="option3">Even Sem</option>
                        <option value="option4">Summer Term</option>
                    </select>
                    <br></br>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default AttendanceRegister;
