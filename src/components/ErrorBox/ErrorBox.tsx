import React from "react";

import "./ErrorBox.css";

const ErrorBox = (props: any) => {
  return (
    <div className={`alert alert-${props.varient || "info"}`}>
      {props.children}
    </div>
  );
};

export default ErrorBox;
