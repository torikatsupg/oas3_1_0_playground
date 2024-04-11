import axios from "axios";

export const httpClient = () => {
  // TODO(torikatsu): custom axios instance
  return axios.create();
};
