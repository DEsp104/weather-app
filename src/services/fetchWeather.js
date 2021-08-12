import axios from "axios";
require("dotenv").config();



export async function getWeather({ zipcode }) {
  const results = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/data/2.5/forecast?zip=${zipcode},us&units=imperial&appid=${process.env.REACT_APP_API_KEY}`).then((res) => {
    // console.log(res)
    return res.data;
  });

  return results;
}