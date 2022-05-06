import React from "react";

function ExperienceDetails({ handleChange }) {
  const mystyle = {
    padding: "10px 20px 10px 20px",

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
    fontFamily: "Arial",
    //backgroundColor: "#CF0063",
  };
  const h3style = {
    float: "center",
  };
  return (
    <div style={outerdiv}>
      <div style={divstyle}>
        <h2>Experience Details</h2>
      </div>
      <hr></hr>
      <form>
        <div class="row g-3" style={mystyle}>
          <div class="col-sm-4">
            <h3>Experience1</h3>
          </div>
        </div>
        <div class="row g-3" style={mystyle}>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Institue/Organization"
              aria-label="College/University"
              onChange={handleChange("exp1institute")}
              name="exp1institute"
            />
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Position"
              aria-label="dd-mm-yy"
              onChange={handleChange("exp1position")}
              name="exp1position"
            />
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Duration"
              aria-label="dd-mm-yy"
              onChange={handleChange("exp1duration")}
              name="exp1duration"
            />
          </div>
        </div>
        <div class="row g-3" style={mystyle}>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Description"
              aria-label="Description"
              onChange={handleChange("exp1descrption")}
              name="exp1descrption"
            />
          </div>
        </div>
        <hr></hr>
        <div class="row g-3" style={mystyle}>
          <div class="col-sm-4">
            <h4>Experience2</h4>
          </div>
        </div>
        <div class="row g-3" style={mystyle}>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Institue/Organization"
              aria-label="College/University"
              onChange={handleChange("exp2institute")}
              name="exp2institute"
            />
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Position"
              aria-label="dd-mm-yy"
              onChange={handleChange("exp2position")}
              name="exp2position"
            />
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Duration"
              aria-label="dd-mm-yy"
              onChange={handleChange("exp2duration")}
              name="exp2duration"
            />
          </div>
        </div>
        <div class="row g-3" style={mystyle}>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Description"
              aria-label="Description"
              onChange={handleChange("exp2descrption")}
              name="exp2descrption"
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

export default ExperienceDetails;
