
import React from "react";
import "./CourseHeader.css";
function CourseHeader() {
    return (
        <div className="leftSide">
            
            <div className="sear">
                <div class="search-bar padding-1 max-1200 flex-row center-x margin-center">
                    <form style={{display:"flex"}}> 
                        <input class="input-md mr-1" type="text" name="location" placeholder="Location" />
                        <button class="input-md">Search</button>
                    </form>

                    <div className="courseHeading">
                       <a href="./"  className="courseName"><p>Course 1: DSA</p></a> 
                       <a href="./" className="courseName"><p>Course 1: DSA</p></a> 
                       <a href="./" className="courseName"><p>Course 1: DSA</p></a> 
                       <a href="./" className="courseName"><p>Course 1: DSA</p></a> 
                       <a href="./" className="courseName"><p>Course 1: DSA</p></a> 
                       <a href="./" className="courseName"><p>Course 1: DSA</p></a> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseHeader;

