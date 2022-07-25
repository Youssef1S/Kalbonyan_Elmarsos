import React from "react";

const DemoOutput = (props) => {
  console.log("Demo output running");
  return <p>{props.show ? "Welcome Home" : ""}</p>;
};

export default React.memo(DemoOutput);
