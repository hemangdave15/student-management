import React from 'react';
import './Criteria.css';
import { useNavigate } from 'react-router-dom';

const Criteria = () => {

    const navigate = useNavigate();
  return (
    <div className = "parent-div"> 

        <button className="home-icon-criteria" onClick={() => navigate("/home")}>
            <img src="\images\home.png"></img>
        </button>
      <div className='card'>
        <h1 className='title'>Attendance Criteria</h1>
        <div className='scrollViewContent'>
            
          <div className='descriptionContainer'>
            <h3 className='sectionTitle'>All Clear</h3>
            <p className='description'>
              Clear: This designation is given when the overall attendance across all
              subjects is greater than 75%, signifying exemplary attendance performance.
            </p>
          </div>

          <div className='descriptionContainer'>
            <h3 className='sectionTitle'>TNG</h3>
            <p className='description'>
              TNG- Term Not Granted{'\n'}{'\n'}
              This is assigned when the overall attendance across all subjects is below 70%,
              indicating a need for improvement in all areas of attendance.
            </p>
          </div>

          <div className='descriptionContainer'>
            <h3 className='sectionTitle'>CNG</h3>
            <p className='description'>
              CNG- Course Not Granted{'\n'}{'\n'}
              Indicates that the attendance of some subjects is
              below the expected standard, specifically less than 70%.
            </p>
          </div>

          <div className='descriptionContainer'>
            <h3 className='sectionTitle'>CCNG</h3>
            <p className='description'>
              CCNG- Conditionally Course Not Granted{'\n'}{'\n'}
              Implies that while the overall attendance is not ideal, falling between 70% and 75%,
              it is not yet considered unsatisfactory.{'\n'}
              Assignments need to be submitted according to the respective faculty.
            </p>
          </div>

        <h1 className='medical'>Medical Leave Rules</h1>
        <div className='contain'>
            <div className='row'>
              <div className='cell'>Days</div>
              <div className='cell'>Documents Required</div>
            </div>
            <div className='row'>
              <div className='cell'>Greater than 10 days</div>
              <div className='cell'>
                Investigation Reports{'\n'}
                Details of Treatment Received{'\n'}
                Medical Certificate/Fitness Certificate
              </div>
            </div>
            <div className='row'>
              <div className='cell'>Less than 10 days</div>
              <div className='cell'>
                Medical Certificate{'\n'}
                Investigation Reports{'\n'}
                Details of Treatment Received (if any)
              </div>
            </div>
        </div>

          <br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
      </div>
    </div>
  );
};
  

export default Criteria;