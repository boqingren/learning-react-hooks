import React, { Fragment, useState } from "react";
import { PageHeader } from "../../components"

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
      <PageHeader>
        MyUseState
      </PageHeader>
    </Fragment>
  );
});

export default MyUseState;
