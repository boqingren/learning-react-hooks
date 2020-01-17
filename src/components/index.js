import Loading from "./Loading";
import PageHeader from "./PageHeader";
import ErrorBoundary from "./ErrorBoundary";
import RouteWithAuth from "./RouteWithAuth";

export { Loading, PageHeader, ErrorBoundary, RouteWithAuth };

// const result = {};
// const excludes = ["./index.js"];
// const context = require.context("./", false, /\.js$/);
// const subs = context.keys().filter((key) => !excludes.includes(key));
// subs.forEach(key => result[key.match(/^.\/(.+).js$/)[1]] = context(key).default);

// export default Object.freeze(result);
