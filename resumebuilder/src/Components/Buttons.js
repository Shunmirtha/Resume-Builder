import React from "react";

function Buttons() {
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
  const mystyle = {
    padding: "10px 20px 10px 20px",

    fontFamily: "Arial",
  };
  return (
    <div class="row g-3" style={mystyle}>
      <div class="col-sm-4"></div>
      <div class="col-sm-4">
        <button style={lefttbutton}> &larr; back</button>
        <button style={righttbutton} disabled>
          Next &rarr;
        </button>
      </div>
    </div>
  );
}

export default Buttons;
