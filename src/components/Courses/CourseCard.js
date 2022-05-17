
import React from "react";
import "./CourseCard.css";
import im from "../../img/Course.png"
function CourseCard() {
    return (
        <div>
            <div class="my-card">
                <div class="card-content">
                    <div class="img-place">
                        <div id="card-img">
                            <img src={im}></img>
                        </div>
                    </div>
                    <div class="card-text">
                        <div className="card-text-1">
                            <h5 className="courseName">Course Name</h5>
                            <h5 className="coursePrice">Price</h5>
                        </div>
                        <button class="btn">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseCard;

