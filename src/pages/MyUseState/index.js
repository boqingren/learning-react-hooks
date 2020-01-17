import React, { Fragment, useState } from "react";
import Widget from "../../widget"

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
      <Widget.HeaderWarp>
        <Title text="MyUseState" />
      </Widget.HeaderWarp>
    </Fragment>
  );
});

export default MyUseState;
