import { AUTH } from "../consts";
import storage from "./storage";

const { getLocalStorage } = storage;

const getUserToken = () => {
  const token = getLocalStorage(AUTH.USER_TOKEN);
  return token;
};

const isLogin = () => {
  const token = getUserToken();
  const bool = Boolean(token);
  return bool;
};

export default Object.freeze({
  isLogin,
  getUserToken
});
