import * as React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Loading from "./Loading";
import ErrorBoundary from "./ErrorBoundary";
import utils from "../utils";
import configs from "../configs";

const RouteWithAuth = () => {
  const getRoutePathKeys = () => {
    const routePaths = utils.route.getRoutePaths();
    const routePathKeys = Object.keys(routePaths);
    return routePathKeys;
  };

  const renderNotFound = routeProps => {
    return <div>This page could not be found!</div>;
  }

  const renderPage = (routeProps, key) => {
    const routePaths = utils.route.getRoutePaths();
    try {
      const Page = React.lazy(() => import(`../pages/${routePaths[key].pageName}`));
      return <Page {...routeProps} />;
    } catch (error) {
      return renderNotFound();
    }
  };

  const renderPageWithoutLogin = key => {
    const routePaths = utils.route.getRoutePaths();
    const loginPath = routePaths.login.path;
    const from = routePaths[key].path;
    const to = `${loginPath}?from=${from}`;
    return <Redirect to={to} />;
  };

  const renderPageWithIsLogin = (routeProps, key) => {
    const isLogin = utils.auth.isLogin();
    if (isLogin) return renderPage(routeProps, key);
    return renderPageWithoutLogin(key);
  };

  const handleRouteRender = (routeProps, key) => {
    console.log("configs:", configs);
    const routePaths = utils.route.getRoutePaths();
    const { isNeedLogin } = routePaths[key];
    if (!isNeedLogin) return renderPage(routeProps, key);
    return renderPageWithIsLogin(routeProps, key);
  };

  const renderRoutes = () => {
    const routePaths = utils.route.getRoutePaths();
    const routePathKeys = getRoutePathKeys();
    return routePathKeys.map(key => {
      return React.createElement(Route, {
        exact: true,
        key: routePaths[key].path,
        path: routePaths[key].path,
        render: routeProps => handleRouteRender(routeProps, key)
      });
    });
  };

  return (
    <ErrorBoundary>
      <React.Suspense fallback={<Loading />}>
        <HashRouter>
          <Switch>{renderRoutes()}</Switch>
        </HashRouter>
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default RouteWithAuth;
