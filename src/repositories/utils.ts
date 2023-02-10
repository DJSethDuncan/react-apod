import axios from "axios";
import ResultData from "../types/ResultData";
import { AxiosResponse } from "axios";

export const getApiData = async (): Promise<AxiosResponse<ResultData>> => {
  const apiKey = process.env.REACT_APP_NASA_API_TOKEN;
  const result = await axios.get(
    `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
  );
  return result;
};
