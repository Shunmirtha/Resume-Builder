import React from "react";

function ExtraDetails({ handleChange }) {
  const mystyle = {
    padding: "10px 20px 10px 20px",

    fontFamily: "Arial",
  };
  const centerbutton = {
    float: "center",
    borderColor: "rgba(0,0,0,0.2)",
    borderRadius: 5,
    color: "white",
    backgroundColor: "#CF0063",
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
    backgroundColor: "rgba(0,0,0,0.2)",
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
        <h2>Extra Details</h2>
      </div>
      <hr></hr>
      <form>
        <div class="row g-3" style={mystyle}>
          <div class="col">
            <h3>Skills/Languages</h3>
          </div>
        </div>
        <div class="row g-3" style={mystyle}>
          <div class="col">
            <input
              required
              type="text"
              class="form-control"
              placeholder="Skill 1"
              aria-label="College/University"
              onChange={handleChange("skill1")}
              name="skill1"
            />
          </div>
          <div class="col">
            <input
              required
              type="text"
              class="form-control"
              placeholder="Skill 2"
              aria-label="College/University"
              onChange={handleChange("skill2")}
              name="skill2"
            />
          </div>
          <div class="col">
            <input
              required
              type="text"
              class="form-control"
              placeholder="Skill 3"
              aria-label="College/University"
              onChange={handleChange("skill3")}
              name="skill3"
            />
          </div>
        </div>

        <div class="row g-3" style={mystyle}>
          <div class="col">
            <input
              required
              type="text"
              class="form-control"
              placeholder="Skill 4"
              aria-label="College/University"
              onChange={handleChange("skill4")}
              name="skill4"
            />
          </div>
          <div class="col">
            <input
              required
              type="text"
              class="form-control"
              placeholder="Skill 5"
              aria-label="College/University"
              onChange={handleChange("skill5")}
              name="skill5"
            />
          </div>
          <div class="col">
            <input
              required
              type="text"
              class="form-control"
              placeholder="Skill 6"
              aria-label="College/University"
              onChange={handleChange("skill6")}
              name="skill6"
            />
          </div>
        </div>

        <hr></hr>
        <div class="row g-3" style={mystyle}>
          <div class="col">
            <h3>Interests</h3>
          </div>
        </div>
        <div class="row g-3" style={mystyle}>
          <div class="col">
            <input
              required
              type="text"
              class="form-control"
              placeholder="Interest 1"
              aria-label="College/University"
              onChange={handleChange("interest1")}
              name="interest1"
            />
          </div>
          <div class="col">
            <input
              required
              type="text"
              class="form-control"
              placeholder="Interest 2"
              aria-label="College/University"
              onChange={handleChange("interst2")}
              name="interst2"
            />
          </div>
          <div class="col">
            <input
              required
              type="text"
              class="form-control"
              placeholder="Interest 3"
              aria-label="College/University"
              onChange={handleChange("interst3")}
              name="interst3"
            />
          </div>
        </div>

        <div class="row g-3" style={mystyle}>
          <div class="col">
            <input
              required
              type="text"
              class="form-control"
              placeholder="Interest 4"
              aria-label="College/University"
              onChange={handleChange("interst4")}
              name="interst4"
            />
          </div>
          <div class="col">
            <input
              required
              type="text"
              class="form-control"
              placeholder="Interest 5"
              aria-label="College/University"
              onChange={handleChange("interst5")}
              name="interst5"
            />
          </div>
          <div class="col">
            <input
              required
              type="text"
              class="form-control"
              placeholder="Interest 6"
              aria-label="College/University"
              onChange={handleChange("interst6")}
              name="interst6"
            />
          </div>
        </div>

        {/* <div class="row g-3" style={mystyle}>
          <div class="col-sm-4"></div>
          <div class="col-sm-4">
            <button style={lefttbutton}> &larr; back</button>
            <button style={righttbutton} disabled>
              Next &rarr;
            </button>
          </div>
        </div> */}
        <div class="row g-3" style={mystyle}>
          <div class="col">
            <button style={centerbutton}>Download Resume</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ExtraDetails;
