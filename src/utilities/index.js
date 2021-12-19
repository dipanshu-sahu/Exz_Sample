import axios from "axios";

export const APICall = (
  url,
  payload,
  successHandler,
  errorHandler,
  requestType
) => {
  let config = {};
  if (requestType === "GET") {
    config = {
      method: requestType,
      url: url,
      headers: {},
    };
  }
  if (requestType === "POST") {
    config = {
      method: requestType,
      url: url,
      headers: {},
      data: payload,
    };
  }
  axios(config).then(successHandler).catch(errorHandler);
};
