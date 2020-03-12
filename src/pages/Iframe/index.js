import React, { Fragment, useMemo, useCallback } from "react";

const Buttons = React.memo(() => {
  const routePaths = useMemo(() => [{
    name: "orderList page",
    path: "/otc/otcManager/orderList"
  }, {
    name: "otcAdOrderList page",
    path: "/otc/otcManager/otcAdOrderList"
  }, {
    name: "virtualCoinList page",
    path: "/otc/otcManager/virtualCoinList"
  }], []);

  const handleSendMsg = useCallback((path) => {
    const frame = window.frames[0];
    frame.postMessage(path, "http://10.0.0.172:3040/#/admin.html/dfs");
  }, []);

  return routePaths.map(item => (
    <p key={item.path}>
      <button onClick={() => handleSendMsg(item.path)}>
        {item.name}
      </button>
    </p>
  ));
});

const Iframe = React.memo(props => {
  return (
    <Fragment>
      <h1>main page.</h1>
      <p>下面是 iframe 嵌套的页面：</p>
      <iframe width="100%" src="http://10.0.0.172:3040/admin.html" frameBorder="1"></iframe>
      <Buttons />
    </Fragment>
  );
});

export default Iframe;
