import React from "react";
import "bootstrap/dist/css/bootstrap.css";
//import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import EducationDetails from "./EducationDetails";

import { useHistory } from "react-router-dom";

function PersonalDetails({ handleChange }) {
  const history = useHistory();

  function handleClick() {
    history.push(EducationDetails);
  }
  const mystyle = {
    padding: "30px 50px 0px 50px",

    fontFamily: "Arial",
  };
  const divstyle = {
    padding: "20px 50px 50px 50px",
    fontFamily: "Arial",
    //boxshadow: "0 3px 10px rgb(0 0 0 / 0.2)",
  };
  const leftbutton = {
    float: "right",

    //borderColor: "rgba(0,0,0,0.2)",
    borderRadius: 5,
    backgroundColor: "rgba(0,0,0,0.2)",
  };
  const rightbutton = {
    float: "left",
    borderColor: "rgba(0,0,0,0.2)",
    borderRadius: 5,
    color: "white",
    backgroundColor: "#CF0063",
  };

  return (
    <div style={divstyle}>
      <h2>Personal Details</h2>
      <div>
        <hr></hr>
        <form>
          <div class="row g-3">
            <div class="col" style={mystyle}>
              <input
                required
                type="text"
                class="form-control"
                placeholder="First name*"
                aria-label="First name"
                onChange={handleChange("fname")}
                name="fname"
              />
            </div>
            <div class="col" style={mystyle}>
              <input
                required
                type="text"
                class="form-control"
                placeholder="Last name*"
                aria-label="Last name"
                onChange={handleChange("lname")}
                name="lname"
              />
            </div>
          </div>
          <div class="row g-3">
            <div class="col" style={mystyle}>
              <input
                required
                type="email"
                class="form-control"
                placeholder="email*"
                aria-label="email"
                onChange={handleChange("email")}
                name="email"
              />
            </div>
            <div class="col" style={mystyle}>
              <input
                type="number"
                class="form-control"
                placeholder="Phone Number"
                aria-label="Phone Number"
                onChange={handleChange("pnumber")}
                name="pnumber"
              />
            </div>
          </div>
          <div class="row g-3">
            <div class="col" style={mystyle}>
              <input
                type="url"
                class="form-control"
                placeholder="website"
                aria-label="website"
                onChange={handleChange("website")}
                name="website"
              />
            </div>
            <div class="col" style={mystyle}>
              <input
                type="url"
                class="form-control"
                placeholder="GitHub"
                aria-label="GitHub"
                onChange={handleChange("github")}
                name="github"
              />
            </div>
          </div>
          <div class="row g-3">
            <div class="col" style={mystyle}>
              <input
                type="url"
                class="form-control"
                placeholder="Linked In"
                aria-label="Linked In"
                onChange={handleChange("linkedin")}
                name="linkedin"
              />
            </div>
            <div class="col" style={mystyle}>
              <input
                type="url"
                class="form-control"
                placeholder="Twitter"
                aria-label="Twitter"
                onChange={handleChange("twitter")}
                name="twitter"
              />
            </div>
          </div>
          <div class="row g-3">
            <div class="col" style={mystyle}>
              <input
                type="url"
                class="form-control"
                placeholder="Facebook"
                aria-label="Facebook"
                onChange={handleChange("fb")}
                name="fb"
              />
            </div>
            <div class="col" style={mystyle}>
              <input
                type="url"
                class="form-control"
                placeholder="Instagram"
                aria-label="Instagram"
                onChange={handleChange("insta")}
                name="insta"
              />
            </div>
          </div>
          {/* <div class="row g-3">
            <div class="col" style={mystyle}>
              <button disabled style={leftbutton}>
                {" "}
                &larr; back
              </button>
            </div>
            <div class="col" style={mystyle}>
               <Router>
                <Link to="/EducationDetails" style={rightbutton} type="button">
                  EducationDetails
                </Link>
                <Route
                  path="/EducationDetails"
                  component={EducationDetails}
                ></Route>
              </Router> 

              <button style={rightbutton} onClick={handleClick}>
                next &rarr;
              </button>
            </div>
          </div> */}
        </form>
        <hr></hr>
      </div>
    </div>
  );
}

export default PersonalDetails;
