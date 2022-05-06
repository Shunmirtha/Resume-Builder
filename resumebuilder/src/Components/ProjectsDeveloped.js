import React from "react";

function ProjectsDeveloped({ handleChange }) {
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
        <h2>Projects Developed</h2>
      </div>
      <hr></hr>
      <form>
        <div class="row g-3" style={mystyle}>
          <div class="col">
            <h3>Project 1</h3>
          </div>
        </div>
        <div class="row g-3" style={mystyle}>
          <div class="col">
            <input
              required
              type="text"
              class="form-control"
              placeholder="Title*"
              aria-label="College/University"
              onChange={handleChange("pr1title")}
              name="pr1title"
            />
          </div>
        </div>
        <div class="row g-3" style={mystyle}>
          <div class="col">
            <input
              type="url"
              class="form-control"
              placeholder="Link"
              aria-label="Description"
              onChange={handleChange("pr1link")}
              name="pr1link"
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
              onChange={handleChange("pr1descrption")}
              name="pr1descrption"
            />
          </div>
        </div>
        <hr></hr>
        <div class="row g-3" style={mystyle}>
          <div class="col">
            <h3>Project 2</h3>
          </div>
        </div>
        <div class="row g-3" style={mystyle}>
          <div class="col">
            <input
              required
              type="text"
              class="form-control"
              placeholder="Title*"
              aria-label="College/University"
              onChange={handleChange("pr2title")}
              name="pr2title"
            />
          </div>
        </div>
        <div class="row g-3" style={mystyle}>
          <div class="col">
            <input
              type="url"
              class="form-control"
              placeholder="Link"
              aria-label="Description"
              onChange={handleChange("pr2link")}
              name="pr2link"
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
              onChange={handleChange("pr2descrption")}
              name="pr2descrption"
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

export default ProjectsDeveloped;
