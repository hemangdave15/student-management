import './App.css';
import Login from './Login';
import Home from './home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentList from './home/StudentList';
import MarkAttendance1 from './home/MarkAttendance1';
import MarkAttendance2 from './home/MarkAttendance2';
import Summary from './home/Summary.js';
import StudentPerformance from './home/StudentPerformance.js';
import Criteria from './home/Criteria.js';
import AddStudent from './home/AddStudent.js';
import Department from './home/Department.js';
import About from './home/About.js';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element = {<Login></Login>}></Route>
          <Route path = "/home" element = {<Home></Home>}></Route>
          <Route path = "/home/student-list" element = {<StudentList></StudentList>}></Route>
          <Route path = "/home/markattendance" element = {<MarkAttendance1></MarkAttendance1>}></Route>
          <Route path = "/home/markattendance2" element = {<MarkAttendance2></MarkAttendance2>}></Route>
          <Route path = "/home/summary" element = {<Summary></Summary>}></Route>
          <Route path = "/home/performance" element = {<StudentPerformance></StudentPerformance>}></Route>
          <Route path = "/home/criteria" element = {<Criteria></Criteria>}></Route>
          <Route path = "/home/student-list/add" element = {<AddStudent></AddStudent>}></Route>
          <Route path = "/home/department" element = {<Department></Department>}></Route>
          <Route path = "/home/about" element = {<About></About>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
