import React from "react";

function PrintResume({ handleChange, values }) {
  return (
    <div>
      <h4>Personal Details</h4>
      {values.fname}
      <br></br>
      {values.lname}
      <br></br>
      {values.email}
      <br></br>
      {values.pnumber}
      <br></br>
      {values.website}
      <br></br>
      {values.github}
      <br></br>
      {values.linkedin}
      <br></br>
      {values.twitter}
      <br></br>
      {values.fb}
      <br></br>
      {values.insta}
      <br></br>
      <h4>Education Details</h4>
      {values.college}
      <br></br>
      {values.collegeDs}
      <br></br>
      {values.collegeQualification}
      <br></br>
      {values.collegeDesripton}
      <br></br>
      {values.school}
      <br></br>
      {values.schoolDs}
      <br></br>
      {values.schoolDe}
      <br></br>
      {values.schoolQualification}
      <br></br>
      {values.schoolDescription}
      <br></br>
      <h4>ExperienceDetails</h4>
      {values.exp1institute}
      <br></br>
      {values.exp1position}
      <br></br>
      {values.exp1duration}
      <br></br>
    </div>
  );
}
// college: "",
//     collegeDs: "",
//     collegeDe: "",
//     collegeQualification: "",
//     collegeDesripton: "",
//     school: "",
//     schoolDs: "",
//     schoolDe: "",
//     schoolQualification: "",
//     schoolDescription: "",
//     //experience_details
//     exp1institute: "",
//     exp1position: "",
//     exp1duration: "",
//     exp1descrption: "",
//     exp2institute: "",
//     exp2position: "",
//     exp2duration: "",
//     exp2descrption: "",
//     //extra_details
//     skill1: "",
//     skill2: "",
//     skill3: "",
//     skill4: "",
//     skill5: "",
//     skill6: "",
//     interest1: "",
//     interst2: "",
//     interst3: "",
//     interst4: "",
//     interst5: "",
//     interst6: "",
//     //personal_details
//     fname: "",
//     lname: "",
//     email: "",
//     pnumber: "",
//     website: "",
//     github: "",
//     linkedin: "",
//     twitter: "",
//     fb: "",
//     insta: "",
//     //projects_developed
//     pr1title: "",
//     pr1link: "",
//     pr1descrption: "",
//     pr2title: "",
//     pr2link: "",
//     pr2descrption: "",

export default PrintResume;
