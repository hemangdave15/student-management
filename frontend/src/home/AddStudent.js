import React, { useState } from "react";
import axios from "axios";
import './AddStudent.css';
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [dob, setDob] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [address, setAddress] = useState("");
  const [branch, setBranch] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    const studentData = {
      studentName: name,
      studentId: studentId,
      branch: branch,
      phoneNumber: mobileNo,
      dateOfBirth: dob,
      joiningDate: joiningDate,
      activeStudent: true,
      cgpa: cgpa,
      address: address,
    };

    axios
      .post("http://192.168.1.7:8000/addStudent", studentData)
      .then((response) => {
        alert("Registration Successful. You have been registered successfully.");
        setName("");
        setStudentId("");
        setDob("");
        setMobileNo("");
        setCgpa("");
        setAddress("");
        setJoiningDate("");
        setBranch("");
      })
      .catch((error) => {
        alert("Registration Failed. An error occurred during registration.");
        console.log("register failed", error);
      });
  };

  return (
    <div className="mainn">
        <button className="home-icon-criteria" onClick={() => navigate("/home")}>
            <img src="\images\home.png"></img>
        </button>
        <div className="containerrr">
            <h1 className="new-stud-title">Add a New Student</h1>

            <label>Full Name (First and last Name)</label>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />

            <label>Student Id</label>
            <input
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                placeholder="Student Id"
            />

            <label>Branch</label>
            <input
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                placeholder="Branch"
            />

            <label>Mobile Number</label>
            <input
                value={mobileNo}
                onChange={(e) => setMobileNo(e.target.value)}
                placeholder="Mobile No"
            />

            <label>Date of Birth</label>
            <input
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                placeholder="Enter Date of Birth"
            />

            <label>Joining Date</label>
            <input
                value={joiningDate}
                onChange={(e) => setJoiningDate(e.target.value)}
                placeholder="Joining Date"
            />

            <label>Cgpa</label>
            <input
                value={cgpa}
                onChange={(e) => setCgpa(e.target.value)}
                placeholder="Enter Cgpa"
            />

            <label>Address</label>
            <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter Address"
            />

            <button className="button-add" onClick={handleRegister}>Add Student</button>
        </div>
        </div> 
  );
};

export default AddStudent;