import configs from "../configs";

const getRoutePaths = () => {
  const { routePaths } = configs;
  return routePaths;
};

export default Object.freeze({
  getRoutePaths
});
