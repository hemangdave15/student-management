import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './StudentPerformance.css';


const StudentPerformance = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("http://192.168.1.7:8000/students");
        const data = await response.json();

        const sortedStudents = [];
        for (let branch of ["CSE", "AIML", "CE", "ME", "ENTC", "RNA"]) {
          const students = data.filter((student) => student.branch === branch);
          const sortedStudentsBranch = students.sort((a, b) => b.cgpa - a.cgpa);
          sortedStudents.push(...sortedStudentsBranch);
        }

        setStudents(sortedStudents);
      } catch (error) {
        console.error("Error fetching students", error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="divv1">
        <button className="home-icon-criteria" onClick={() => navigate("/home")}>
            <img src="\images\home.png"></img>
        </button>
      <div className="containerr">
        <h1 className="h1-title">Rank List</h1>
        {["CSE", "AIML", "CE", "ME", "ENTC", "RNA"].map((branch) => (
          <div key={branch} className = 'branchContainer'>
            <h2 className="branchTitle">{branch}</h2>
            <ul>
              {students
                .filter((student) => student.branch === branch)
                .map((student, index) => (
                  <li key={student._id} className="studentContainer">
                    <span className="rank">{index + 1}.</span>
                    <div className="studentInfo">
                      <span className="studentName">{student.studentName}</span>
                      <span className="cgpaa">{student.cgpa}</span>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};


export default StudentPerformance;