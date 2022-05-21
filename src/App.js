

import React from "react";
import ReactDOM from 'react-dom';
// import About from "./components/About/About";
// import Home from "./components/Home/Home";
// import CoursePage from "./components/Courses/CoursePage";
// import JobPage from './components/Job/JobPage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import JobDetails from "./components/JobDetails/JobDetails"

function App() {
  return (
    <Router>
           <div>
           {/* <Routes>
                 <Route exact path='/' element={<Home/>}></Route>
                 <Route exact path='/about' element={<About/>}></Route>
                 <Route exact path='/job' element={<JobPage/>}></Route>
                 <Route exact path='/mockTest' element={<About/>}></Route>
                 <Route exact path='/preparation' element={<CoursePage />}></Route>
                 <Route exact path='/contact' element={<CoursePage />}></Route>
          </Routes> */}
          <JobDetails></JobDetails>
          
         
          </div>
          
       </Router>
  );
}

export default App;

