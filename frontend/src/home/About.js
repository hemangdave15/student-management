import React from "react";
import "./About.css"; // Importing CSS file for styles
import { useNavigate } from "react-router-dom";

const About = () => {

const navigate = useNavigate();
  return (
    <div className="about-container">
        <button className="home-icon-criteria" onClick={() => navigate("/home")}>
            <img src="\images\home.png"></img>
        </button>
      <div className="about-header">
        <h1 className="about-title">About the Institute</h1>
        <h2 className="institute-title">Pune Institute of Technology</h2>
      </div>

      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src="/images/institute1.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src="/images/institute2.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="/images/institute3.jpg" className="d-block w-100" alt="..." />
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

    <br></br>
    <br></br>

      <div className="about-grid">
        <div className="about-card">
          <h3 className="about-name">Location</h3>
          <p className="about-description">Pune, Maharashtra, India</p>
        </div>

        <div className="about-card">
          <h3 className="about-name">Overview</h3>
          <p className="about-description">
            Pune Institute of Technology (PIT) is a renowned institution
            located in the vibrant city of Pune, known for its excellence in
            providing education and research opportunities in the fields of
            computer science, artificial intelligence and machine learning
            (AIML), robotics, electronics and communication, and mechanical
            engineering.
          </p>
        </div>

        <div className="about-card">
          <h3 className="about-name">Faculty and Staff</h3>
          <p className="about-description">
            PIT boasts a team of highly qualified and experienced faculty
            members who are experts in their respective fields. The faculty
            members are dedicated to providing quality education, mentorship,
            and guidance to students, nurturing their talents and preparing
            them for successful careers in their chosen fields.
          </p>
        </div>

        <div className="about-card">
          <h3 className="about-name">Campus</h3>
          <p className="about-description">
            PIT boasts a sprawling and picturesque campus spread over acres of
            lush greenery, providing an ideal environment for academic
            pursuits and extracurricular activities. The campus is equipped
            with state-of-the-art facilities, modern classrooms, well-equipped
            laboratories, and research centers, creating an inspiring learning
            atmosphere for students.
          </p>
        </div>

        <div className="about-card">
          <h3 className="about-name">Research Programs</h3>
          <p className="about-description">
            PIT is committed to fostering a culture of innovation and research
            excellence. The institution offers various research programs and
            opportunities for students and faculty members to engage in
            cutting-edge research projects, collaborate with industry
            partners, and contribute to advancements in their respective
            fields.
          </p>
        </div>

        <div className="about-card">
          <h3 className="about-name">Industry Connect</h3>
          <p className="about-description">
            PIT has established strong ties with leading industries and
            organizations, facilitating industry-relevant
            training,internships, and placements for its students. The
            institution regularly hosts industry experts, guest lectures, and
            workshops to provide students with insights into the latest trends
            and developments in the industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;