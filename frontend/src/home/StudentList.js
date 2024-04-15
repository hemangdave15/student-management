import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './StudentList.css';

const SearchResults = ({ data, input, setInput, onRemoveStudent }) => {
  return (
    <div className="wrapper">
      {data.map((item) => {
        if (item.studentName.toLowerCase().includes(input.toLowerCase())) {
          return (
            <div className="wrapper-child"
              key={item.studentId}
            >
              <div className="divvv3">
                <div className="initials-box">
                  <span className="initial">
                    {item.studentName.charAt(0)}
                  </span>
                </div>

                <div className="name-div">
                  <span className="name">
                    {item.studentName}
                  </span>
                  <span className="branch-prn">
                    {item.branch} ({item.studentId})
                  </span>
                </div>
              </div>
              <button className="minus" onClick={() => onRemoveStudent(item.studentId)}>
                <img src = "/images/minus.png"></img>
              </button>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [input, setInput] = useState("");
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch("http://192.168.1.7:8000/students");
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.log("error fetching student data", error);
      }
    };
    fetchStudentData();
  }, []);

  const handleRemoveStudent = (studentId) => {
    fetch(`http://192.168.1.7:8000/removeStudent/${studentId}`, {
      method: "DELETE",
    })
    .then(() => {
      console.log("deleted");
      setStudents(students.filter((student) => student.studentId !== studentId));
    })
    .catch((error) => {
      console.error(error);
    });
  };

  return (
    <div className="divmain">
      <div style={{ display: "flex", alignItems: "center", backgroundColor: "white" }}>
        <button className="home" onClick={() => navigate("/home")}>
          <img src="\images\home.png"></img>
        </button>
        <div className="searchbar"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ flex: 1 }}
            placeholder="Search"
          />
        </div>
        <button className="add" onClick={() => navigate("/home/student-list/add")}>
          <img src = "/images/plus.png"></img>
      </button>
      </div>

      {students.length > 0 ? (
        <SearchResults
          data={students}
          input={input}
          setInput={setInput}
          onRemoveStudent={handleRemoveStudent}
        />
      ) : (
        <div className="nodata" style={{  }}>
          <p>No Data</p>
          <p>Press on the plus button and add your Student</p>
        </div>
      )}

      
    </div>
  );
};

export default StudentList;