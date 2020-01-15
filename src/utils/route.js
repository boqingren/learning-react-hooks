import configs from "../configs";

const getRoutePaths = () => {
  const { routePaths } = configs;
  return routePaths;
};

const getRoutePathKeys = () => {
  const routePaths = getRoutePaths();
  const routePathKeys = Object.keys(routePaths);
  return routePathKeys;
};

export default Object.freeze({
  getRoutePaths,
  getRoutePathKeys
});
