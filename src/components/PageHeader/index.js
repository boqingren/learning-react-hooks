import React from "react";
import HeaderWarp from "./style/HeaderWarp";

const PageHeader = React.memo(props => {
  return (
    <HeaderWarp>
      {props.children}
    </HeaderWarp>
  );
});

export default PageHeader;
