import pageAuths from "./pageAuths";
import commonUtils from "../utils/common";

// console.log("utils:", utils);

const routePaths = {
  root: {
    path: "/",
    pageName: "Home",
    isNeedLogin: false
  }
};

pageAuths.forEach(item => {
  const key = commonUtils.pojo(item.pageName);
  routePaths[key] = {
    path: `/${key}`,
    pageName: item.pageName,
    isNeedLogin: item.isNeedLogin
  };
});

export default Object.freeze({ ...routePaths });
