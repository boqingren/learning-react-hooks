import React from "react";

const PageHeader = React.memo(props => {
  return (
    <div style={{ textAlign: "left" }}>
      {props.text}
    </div>
  );
});

export default PageHeader;