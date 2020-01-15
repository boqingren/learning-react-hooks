import ENUM from "../enum"

const nodeEnv = process.env.NODE_ENV;

const isDev = () => nodeEnv === ENUM.ENV.DEVELOPMENT;

const isProd = () => nodeEnv === ENUM.ENV.PRODUCTION;

export default Object.freeze({
  isDev,
  isProd
});
