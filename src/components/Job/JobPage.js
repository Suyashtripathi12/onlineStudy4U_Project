import React from "react";
import JobHeader from "./JobHeader";
import JobSearch from "./JobSearch";
import "./JobPage.css";
function JobPage() {
    return (
        <div>
            <div className="JobPage-heading">
                <p style={{fontSize:"30px"}}>Find Jobs With OnlineStudy4U</p>
            </div>
            <div className="JobPage"> 
                <JobHeader></JobHeader>
                <div>
                <JobSearch></JobSearch>
                <JobSearch></JobSearch>
                <JobSearch></JobSearch>
                </div>
               
         </div> 
        </div>
    );
}

export default JobPage;

