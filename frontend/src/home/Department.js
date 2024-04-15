import React from 'react';
import './Department.css';
import { useNavigate } from 'react-router-dom';

const Departments = () => {

    const navigate = useNavigate();
  return (
    <div className="departments-container">
        <button className="home-icon-criteriaa" onClick={() => navigate("/home")}>
            <img src="\images\home.png"></img>
        </button>
      <div className="departments-header">
        <h1 className="departments-title">Departments</h1>
      </div>
            <div className="departments-grid">
            <div className="department-card">
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="100">
          <img src="/images/computer1.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src="/images/computer2.jpg" className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
          <h3 className="department-name">Computer Science</h3>
          <p className="department-description">
            The department offers a rigorous program that covers both
            theoretical foundations and practical applications of computer science.
            <br /><br />
            Total Seats Available - 180
          </p>
        </div>

        <div className="department-card">
          <h3 className="department-name">Artificial Intelligence and Machine Learning</h3>
          <p className="department-description">
            This program offers students a comprehensive understanding
            of AI and ML technologies, preparing them for careers in
            this rapidly growing field.
            <br /><br />
            Total Seats Available - 120
          </p>
          <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="100">
          <img src="/images/ai1.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src="/images/ml1.jpg" className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
        </div>

        <div className="department-card">
  <h3 className="department-name">Robotics and Automation</h3>
  <p className="department-description">
    The department offers students a unique opportunity
    to study advanced robotics technologies and their
    applications.
    <br /><br />
    Total Seats Available - 60
  </p>
  <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="100">
          <img src="/images/robotics1.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src="/images/robo2.jpg" className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
</div>

<div className="department-card">
<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="100">
          <img src="/images/civil1.jpeg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src="/images/civil2.jpg" className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  <h3 className="department-name">Civil Engineering</h3>
  <p className="department-description">
    The department focuses on educating students
    in the fundamental principles and practices of civil engineering.
    <br /><br />
    Total Seats Available - 60
  </p>
</div>


<div className="department-card">
<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="100">
          <img src="/images/elec1.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src="/images/Electronics2.jpg" className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  <h3 className="department-name">Electronics And Tele-Communications</h3>
  <p className="department-description">
    This department focuses on providing students with a
    strong foundation in electronics and communication technologies.
    <br /><br />
    Total Seats Available - 60
  </p>
</div>

<div className="department-card">
  <h3 className="department-name">Mechanical Engineering</h3>
  <p className="department-description">
    This department focuses on educating students
    in the principles of mechanical engineering,
    with an emphasis on practical applications.
    <br /><br />
    Total Seats Available - 60
  </p>
  <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src="/images/mech1.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src="\images\mech2.jpg" className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
</div>



      </div>
    </div>
  );
};

export default Departments;