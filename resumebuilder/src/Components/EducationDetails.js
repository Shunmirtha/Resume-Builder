import React from "react";

function EducationDetails({ handleChange }) {
  const mystyle = {
    padding: "30px 50px 30px 50px",

    fontFamily: "Arial",
  };
  const lefttbutton = {
    float: "left",
    borderColor: "rgba(0,0,0,0.2)",
    borderRadius: 5,
    color: "white",
    backgroundColor: "#CF0063",
  };
  const righttbutton = {
    float: "right",
    borderColor: "rgba(0,0,0,0.2)",
    borderRadius: 5,
    color: "white",
    backgroundColor: "#CF0063",
  };
  const divstyle = {
    boxshadow: "20px 0px 20px red",
    marginTop: 10,
    marginBottom: 11,
    marginLeft: 6,
    marginRight: 8,
    //backgroundColor: "rgba(0,0,0,0.2)",
    padding: "20px 20px 10px 50px",
  };
  const outerdiv = {
    marginTop: 10,
    marginBottom: 11,
    marginLeft: 6,
    marginRight: 8,
    //backgroundColor: "#CF0063",
  };
  return (
    <div style={outerdiv}>
      <div style={divstyle}>
        <h2>Education Details</h2>
      </div>
      <form>
        <div class="row g-3" style={mystyle}>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="College/University"
              aria-label="College/University"
              onChange={handleChange("college")}
              name="college"
            />
          </div>
          <div class="col">
            <input
              type="date"
              class="form-control"
              placeholder="dd-mm-yy"
              aria-label="dd-mm-yy"
              onChange={handleChange("collegeDs")}
              name="collegeDs"
            />
          </div>
          <div class="col">
            <input
              type="date"
              class="form-control"
              placeholder="dd-mm-yy"
              aria-label="dd-mm-yy"
              onChange={handleChange("collegeDe")}
              name="collegeDe"
            />
          </div>
        </div>
        <div class="row g-3" style={mystyle}>
          <div class="col-sm-4">
            <input
              type="text"
              class="form-control"
              placeholder="Qualification"
              aria-label="Qualification"
              onChange={handleChange("collegeQualification")}
              name="collegeQualification"
            />
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Description"
              aria-label="Description"
              onChange={handleChange("collegeDesripton")}
              name="collegeDesripton"
            />
          </div>
        </div>
        <hr></hr>
        <div class="row g-3" style={mystyle}>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="School"
              aria-label="School"
              onChange={handleChange("school")}
              name="school"
            />
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="dd-mm-yy"
              aria-label="dd-mm-yy"
              onChange={handleChange("schoolDs")}
              name="schoolDs"
            />
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="dd-mm-yy"
              aria-label="dd-mm-yy"
              onChange={handleChange("schoolDe")}
              name="schoolDe"
            />
          </div>
        </div>
        <div class="row g-3" style={mystyle}>
          <div class="col-sm-4">
            <input
              type="text"
              class="form-control"
              placeholder="Qualification"
              aria-label="Qualification"
              onChange={handleChange("schoolQualification")}
              name="schoolQualification"
            />
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Description"
              aria-label="Description"
              onChange={handleChange("schoolDescription")}
              name="schoolDescription"
            />
          </div>
        </div>
        {/* <div class="row g-3" style={mystyle}>
          <div class="col-sm-4"></div>
          <div class="col-sm-4">
            <button style={lefttbutton}> &larr; back</button>
            <button style={righttbutton}>Next &rarr;</button>
          </div>
        </div> */}
      </form>
    </div>
  );
}

export default EducationDetails;
