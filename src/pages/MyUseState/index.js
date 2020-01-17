import React, { Fragment, useState } from "react";

const Title = React.memo(props => {
  return (
    <div style={{ textAlign: "left" }}>
      {props.text}
    </div>
  );
});

// const [count, setCount] = useState(0);

const Counter = React.memo(props => {
  return (
    <div style={{ textAlign: "left" }}>
      {props.text}
    </div>
  );
});

const MyUseState = React.memo(props => {

  return (
    <Fragment>
      <Title text="MyUseState" />
    </Fragment>
  );
});

export default MyUseState;
