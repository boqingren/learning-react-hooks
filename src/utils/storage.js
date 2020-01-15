const setLocalStorage = (key, data) => {
  const value = JSON.stringify(data);
  localStorage.setItem(key, value);
};

const setSessionStorage = (key, data) => {
  const value = JSON.stringify(data);
  sessionStorage.setItem(key, value);
};

const getLocalStorage = key => {
  const value = localStorage.getItem(key);
  if (!value) return null;
  try {
    return JSON.parse(value);
  } catch (error) {
    return null;
  }
};

const getSessionStorage = key => {
  const value = sessionStorage.getItem(key);
  if (!value) return null;
  try {
    return JSON.parse(value);
  } catch (error) {
    return null;
  }
};

export default Object.freeze({
  setLocalStorage,
  setSessionStorage,
  getLocalStorage,
  getSessionStorage
});
