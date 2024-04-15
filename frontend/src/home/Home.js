import React from "react";
import "./Home.css";
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  return (
    <div id="div0">
      <img src="/images/flexilogo.png" alt="" className="logo"></img>
      <div id="div1">
        <div id="div2">
          {/* Navigation Buttons */}

          <div id="div4">
            {/* Student List Button */}
            <button
              id="button1"
              onClick={() => navigate("/home/student-list")}
            >
              <div id="div5">
                <img src="/images/phone-book.png" alt=" "></img>
              </div>
              <span>Student List</span>
            </button>

            {/* Mark Attendance Button */}
            <button
              id="button2"
              onClick={() => navigate("/home/markattendance")}
            >
              <div id="div6">
                <img src="/images/attendance.png" alt=""></img>
              </div>
              <span>Mark Attendance</span>
            </button>
          </div>

          {/* Additional Features */}
          <div id="report-container">
            <div id="div7">
              {/* Summary Report Button */}
              <button
                id="button3"
                onClick={() => navigate("/home/summary")}
              >
                <div id="div8">
                  <img src="/images/report.png" alt=""></img>
                </div>
                <span>Summary Report</span>
              </button>
            </div>

            <div id="div9">
              <button
                id="button4"
                onClick={() => navigate("/home/criteria")}
              >
                <div id="div10">
                  <img src="/images/criteria.png" alt=""></img>
                </div>
                <span>Attendance Criteria</span>
              </button>

              <button
                id="button5"
                onClick={() => navigate("/home/about")}
              >
                <div id="div11">
                  <img src="/images/institute.png" alt=""></img>
                </div>
                <span>About the Institute</span>
              </button>
            </div>
          </div>

          <div id="div14">
            <button
              id="button6"
              onClick={() => navigate("/home/department")}
            >
              <div id="div12">
                <img src="/images/department.png" alt=""></img>
              </div>
              <span>Departments</span>
            </button>

            <button
              id="button7"
              onClick={() => navigate("/home/performance")}
            >
              <div id="div13">
                <img src="/images/performance.png" alt=""></img>
              </div>
              <span>Student Performance</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
