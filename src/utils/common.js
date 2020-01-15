// 首字母大写
const capitalize = str => {
  const initial = str.charAt(0).toUpperCase();
  const restLetter = str.slice(1);
  const result = initial + restLetter;
  return result;
};

// 首字母小写
const pojo = str => {
  const initial = str.charAt(0).toLowerCase();
  const restLetter = str.slice(1);
  const result = initial + restLetter;
  return result;
};

export default Object.freeze({
  capitalize,
  pojo
});
