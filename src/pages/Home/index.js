import * as React from "react";
import { Link } from "react-router-dom";
import utils from "../../utils";

const Home = () => {

  const renderLinks = () => {
    const routePaths = utils.route.getRoutePaths();
    const routePathKeys = utils.route.getRoutePathKeys();
    return routePathKeys.map(key => (
      <p>
        <Link key={routePaths[key].path} to={routePaths[key].path}>
          {`${key} page`}
        </Link>
      </p>
    ));
  };

  return (
    <div>
      {renderLinks()}
    </div>
  );
};

export default Home;
