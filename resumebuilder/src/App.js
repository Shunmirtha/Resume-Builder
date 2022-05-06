import reactRouterDom from "react-router-dom";
import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import React, { useState } from "react";
import Appbbar from "./Components/Appbbar";
import PersonalDetails from "./Components/PersonalDetails";
import EducationDetails from "./Components/EducationDetails";
import ExperienceDetails from "./Components/ExperienceDetails";
import ProjectsDeveloped from "./Components/ProjectsDeveloped";
import ExtraDetails from "./Components/ExtraDetails";
import { Button } from "bootstrap";
import Buttons from "./Components/Buttons";
import { Print } from "@material-ui/icons";
import PrintResume from "./Components/PrintResume";
function App() {
  const lefttbutton = {
    float: "left",
    borderColor: "rgba(0,0,0,0.2)",
    borderRadius: 5,
    color: "white",
    backgroundColor: "#CF0063",
  };
  const footerstyle = {
    // marginTop: 10,
    // marginBottom: 11,
    marginLeft: 600,
    // marginRight: 8,
  };
  const righttbutton = {
    float: "right",
    borderColor: "rgba(0,0,0,0.2)",
    borderRadius: 5,
    color: "white",
    backgroundColor: "#CF0063",
  };
  const mystyle = {
    padding: "10px 20px 10px 20px",

    fontFamily: "Arial",
  };
  const [values, setValues] = useState({
    //education_details
    college: "",
    collegeDs: "",
    collegeDe: "",
    collegeQualification: "",
    collegeDesripton: "",
    school: "",
    schoolDs: "",
    schoolDe: "",
    schoolQualification: "",
    schoolDescription: "",
    //experience_details
    exp1institute: "",
    exp1position: "",
    exp1duration: "",
    exp1descrption: "",
    exp2institute: "",
    exp2position: "",
    exp2duration: "",
    exp2descrption: "",
    //extra_details
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
    skill5: "",
    skill6: "",
    interest1: "",
    interst2: "",
    interst3: "",
    interst4: "",
    interst5: "",
    interst6: "",
    //personal_details
    fname: "",
    lname: "",
    email: "",
    pnumber: "",
    website: "",
    github: "",
    linkedin: "",
    twitter: "",
    fb: "",
    insta: "",
    //projects_developed
    pr1title: "",
    pr1link: "",
    pr1descrption: "",
    pr2title: "",
    pr2link: "",
    pr2descrption: "",
  });
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 6) {
      if (values.fname == "") {
        alert("First name is required");
      } else if (values.lname == "") {
        alert("Last name is required");
      } else if (values.email == "") {
        alert("email is required");
      } else if (values.pnumber == "") {
        alert("Phone number is required");
      } else setStep(step + 1);
    } else if (step === 6) {
      document.write(values);
      console.log(values);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  return (
    <div>
      <Appbbar />
      {
        {
          1: <PersonalDetails handleChange={handleChange} />,
          2: <EducationDetails handleChange={handleChange} />,
          3: <ProjectsDeveloped handleChange={handleChange} />,
          4: <ExperienceDetails handleChange={handleChange} />,
          5: <ExtraDetails handleChange={handleChange} />,
          6: <PrintResume handleChange={handleChange} values={values} />,
        }[step]
      }
      <div class="row g-3" style={mystyle}>
        <div class="col-sm-4"></div>
        {step == 6 ? (
          <div class="col-sm-4">
            <button style={lefttbutton} onClick={prevStep}>
              Back
            </button>
          </div>
        ) : (
          <div class="col-sm-4">
            {step > 1 && step < 6 ? (
              <button style={lefttbutton} onClick={prevStep}>
                Back
              </button>
            ) : null}
            {step === 5 ? (
              <button style={righttbutton} onClick={nextStep}>
                Download Resume
              </button>
            ) : (
              <button style={righttbutton} onClick={nextStep}>
                next
              </button>
            )}
            {/* <button stytle={righttbutton} onClick={nextStep}>
            {step === 5 ? "Submit" : "Next"}
          </button> */}
            {/* <button style={lefttbutton}> &larr; back</button>
          <button style={righttbutton} disabled>
            Next &rarr;
          </button> */}
          </div>
        )}
      </div>
      <footer style={footerstyle}>Page {step}</footer>
    </div>
  );
}

export default App;
