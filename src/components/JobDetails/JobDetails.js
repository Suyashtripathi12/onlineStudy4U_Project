
import './JobDetails.css';
import React from "react";
import img from "../../img/logo.png"

function App() {
    return (
        <>
            <div className='JobDetails-block'>
                <img src={img} alt="companyLogo" className='JobDetails-img'></img>
                <div className='JobDetails-descr'>
                    <h2 className='JobDetails-title'>Software Developer Engineer 1</h2>
                    <h5 className='JobDetails-company'>OnlineStudy4U</h5>
                </div>
                <button className='JobDetails-btn'>Login to Apply</button>
            </div>
            <div className='JobDetails-descBlock'>
                <h4 className='JobDetails-descHeading'>Skills Required</h4>
                <ul className='JobDetails-topic'>
                    <li className='JobDetails-topicList'>DSA</li>
                    <li className='JobDetails-topicList'>DSA</li>
                    <li className='JobDetails-topicList'>DSA</li>
                    <li className='JobDetails-topicList'>DSA</li>
                </ul>
                <h4 className='JobDetails-descHeading'>Jobs Description</h4>
                <h5 className='JobDetails-exp'>Software Development Engineer</h5>
                <h4 className='JobDetails-descHeading'>About The Company</h4>
                <h6 className='JobDetails-exp'>Offline Training Available for Enginnering/MBA
                    Colleges & IT Companies. Worried about Aptitude, Reasoning, Verbal Ability, Coding and Softskill training.
                    OnlineStudy4U takes the whole responsibility of training and Providing Placement assistance to your students/Employee.</h6>
                <h3 className='JobDetails-descHeading'>Last Date to Apply</h3>
                <h4 className='JobDetails-date'>23/11/2022</h4>
                <button className='JobDetails-btn'>Login to Apply</button>
            </div>
        </>
    );
}

export default App;

