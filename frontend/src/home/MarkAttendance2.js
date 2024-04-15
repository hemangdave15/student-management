import React, { useState } from "react";
import moment from "moment";
import { FaCircle, FaDotCircle } from "react-icons/fa";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import './MarkAttendance2.css';
import { useNavigate } from "react-router-dom";

const MarkAttendance2 = () => {
  const [attendanceStatus, setAttendanceStatus] = useState("present");
  const [currentDate, setCurrentDate] = useState(moment());
  const { state } = useLocation();
  const navigate = useNavigate();

  console.log(state);
  const [showAlert] = useState(false);

  const goToNextDay = () => {
    const nextDate = moment(currentDate).add(1, "days");
    setCurrentDate(nextDate);
  };

  const goToPrevDay = () => {
    const prevDate = moment(currentDate).subtract(1, "days");
    setCurrentDate(prevDate);
  };

  const formatDate = (date) => {
    return date.format("MMMM D, YYYY");
  };

  const submitAttendance = async (params) => {
    try {
      const attendanceData = {
        studentId: params?.studentId,
        studentName: params?.studentName,
        date: currentDate.format("MMMM D, YYYY"),
        status: attendanceStatus,
      };
      console.log(attendanceData)
      const response = await axios.post(
        "http://192.168.1.7:8000/attendance",
        attendanceData
      );
      if (response.status === 200) {
        console.log(`Attendance submitted successfully for ${params?.studentName}`);
      }
    } catch (error) {
      console.log("error submitting attendance", error);
    }
  };

  return (
    <div className="parent">
      <button className="home-icon" onClick={() => navigate("/home")}>
        <img src="\images\home.png"></img>
      </button>
      <div className="date-div">
      <button className = "previous" onClick={goToPrevDay} size={24} color="black" >
          <img src="/images/back.png"></img>
        </button>
        <span className="date">{formatDate(currentDate)}</span>
        <button className = "next" onClick={goToNextDay} size={24} color="black" >
          <img src = "/images/next.png"></img>
        </button>
      </div>

      <div className="name-parent">
        <div
          className="div-name">
          <span className="first-letter">
            {state?.studentName?.slice(0, 1)}
          </span>
        </div>
        <div className="name-displayy">
          <div className="full-name">
            {state?.studentName}
          </div>

          <div className="branch">
            {state?.branch} {state?.studentId}
          </div>

          <div className="cgpa">
              CGPA : {state?.cgpa}
          </div>
        </div>
      </div>
      
      <div className="attendance">
        <span className="attend-text">
          ATTENDANCE
        </span>
        <div className="att-status">
          <div
            onClick={() => setAttendanceStatus("present")}
            className="present"
          >
            {attendanceStatus === "present" ? (
              <FaDotCircle name="circle" size={24} color="black" />
            ) : (
              <FaCircle name="dot-circle" size={24} color="black" />
            )}
            <span>Present</span>
          </div>

          <div
            onClick={() => setAttendanceStatus("absent")}
            className="absent"
          >
            {attendanceStatus === "absent" ? (
              <FaDotCircle name="circle" size={24} color="black" />
            ) : (
              <FaCircle name="dot-circle"  size={24} color="black" />
            )}
            <span>Absent</span>
          </div>
        </div>
        <div className="ec-ml">
          <div
            onClick={() => setAttendanceStatus("extra_curricular")}
            className="extra"
          >
            {attendanceStatus === "extra_curricular" ? (
              <FaDotCircle name="circle" size={24} color="black" />
            ) : (
              <FaCircle name="dot-circle"  size={24} color="black" />
            )}
            <span>Extra-curricular</span>
          </div>

          <div
            onClick={() => setAttendanceStatus("medical_leave")}
            className="ml"
          >
            {attendanceStatus === "medical_leave" ? (
              <FaDotCircle name="circle" size={24} color="black" />
            ) : (
              <FaCircle name="dot-circle"  size={24} color="black" />
            )}
            <span>Medical Leave</span>
          </div>
        </div>

        <button
          onClick={() => {console.log(state, attendanceStatus)
            submitAttendance({ ...state, attendanceStatus })}}
          className="submit"
        >
          <span
            style={{ textAlign: "center", color: "white", fontWeight: "500" }}
          >
            Submit Attendance
          </span>
        </button>
      </div>
    </div>
  );
};

export default MarkAttendance2;
