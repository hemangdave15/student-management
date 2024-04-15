import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import { Table } from "react-bootstrap"; // Assuming you are using React-Bootstrap for styling
import './Summary.css';
import { useNavigate } from "react-router-dom";

const Summary = (props) => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [currentDate, setCurrentDate] = useState(moment());
  const navigate = useNavigate();

  const goToNextMonth = () => {
    const nextMonth = moment(currentDate).add(1, "months");
    setCurrentDate(nextMonth);
  };

  const goToPrevMonth = () => {
    const prevMonth = moment(currentDate).subtract(1, "months");
    setCurrentDate(prevMonth);
  };

  const formatDate = (date) => {
    return date.format("MMMM, YYYY");
  };

  const fetchAttendanceReport = async () => {
    try {
      const response = await axios.get(
        'http://192.168.1.7:8000/attendance-report-all-students',
        {
          params: {
            month: 11,
            year: 2023,
          },
        }
      );

      setAttendanceData(response.data);
    } catch (error) {
      console.log("Error fetching attendance");
    }
  };

  useEffect(() => {
    fetchAttendanceReport();
  }, []);

  return (
    <div className="divv-parent">
        <button className="home-icon-criteria" onClick={() => navigate("/home")}>
            <img src="\images\home.png"></img>
        </button>
      <div className="date-divv">
      <button className = "previous" onClick={goToPrevMonth} size={24} color="black" >
          <img src="/images/back.png"></img>
        </button>
        <span className="date">{formatDate(currentDate)}</span>
        <button className = "next" onClick={goToNextMonth} size={24} color="black" >
          <img src = "/images/next.png"></img>
        </button>
      </div>

      <div className="d1">
        {attendanceData?.map((item, index) => (
          <div key={index} className="d2">
            <div className="d3">
              <div className="d4-idbox">
                <span className="d4-idbox-span">
                  {item?.studentId?.slice(-3)}
                </span>
              </div>
              <div className="d5">
                <span className="d5-span">
                  {item?.name}
                </span>
                <span className="d5-span2">
                  {item?.branch} ({item?.studentId})
                </span>
              </div>
            </div>

            <div className="table">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>P</th>
                    <th>A</th>
                    <th>EC</th>
                    <th>MD</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{item?.present}</td>
                    <td>{item?.absent}</td>
                    <td>{item?.extra_curricular}</td>
                    <td>{item?.medical_leave}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Summary;