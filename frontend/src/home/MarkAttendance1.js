import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './MarkAttendance1.css';

const MarkAttendance1 = () => {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(moment());

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

  const [students, setStudents] = useState([]);
  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await axios.get("http://192.168.1.7:8000/students");
        setStudents(response.data);
      } catch (error) {
        console.log("error fetching student data", error);
      }
    };
    fetchStudentData();
  }, []);

  const [attendance, setAttendance] = useState([]);
  const fetchAttendanceData = async () => {
    try {
      const response = await axios.get("http://192.168.1.7:8000/attendance", {
        params: {
          date: currentDate.format("MMMM D, YYYY"),
        },
      });
      setAttendance(response.data);
    } catch (error) {
      console.log("error fetching attendance data", error);
    }
  };

  useEffect(() => {
    fetchAttendanceData();
  }, [currentDate]);

  const studentWithAttendance = students.map((student) => {
    const attendanceRecord = attendance.find(
      (record) => record.studentId === student.studentId
    );

    return {
      ...student,
      status: attendanceRecord ? attendanceRecord.status : "", // 'Not Marked' or a default status
    };
  });

  const handleStudentClick = (item) => {
    // Redirect to the next page using studentId
    navigate('/home/markattendance2',{state:item});
  };

  return (
    <div className = "main-div">
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

      <div>
        {studentWithAttendance.map((item, index) => (
          <div className = "name-display" key={index}>
              <button className="name-button"
                onClick={() => handleStudentClick(item)}
              >
                {item.studentName}
              </button>
              <span className="id-branch">{item.branch} ({item.studentId})</span>
            {item.status && (
              <div className="status">
                <span className="status-span" style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>{item.status.charAt(0)}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarkAttendance1;