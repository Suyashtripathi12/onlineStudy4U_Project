
import React from "react";
import "./JobHeader.css";
function JobHeader() {
    return (
        <div className="headerJob search-bar" >
            <form className="  flex-col center-x">
                <input className="input-md" type="text" name="location" placeholder="Job Title" />
                <input className="input-md" type="text" name="location" placeholder="Company" />
                <input className="input-md" type="submit" value="Search" />
            </form>



            <ul className="radioList">
                <li className="radioName">
                    <input type="radio" id="f-option" name="selector" />
                    <label for="f-option">Fresher</label>

                    <div class="radioCheck"></div>
                </li>
                <li className="radioName">
                    <input type="radio" id="f-option" name="selector" />
                    <label for="f-option">Fresher</label>

                    <div class="radioCheck"></div>
                </li>

               

            </ul>
        </div>


    );

}

export default JobHeader;

