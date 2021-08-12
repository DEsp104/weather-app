import axios from "axios";
import dotenv from 'dotenv';
dotenv.config();



export async function getWeather() {
    

  const results = await axios.get(`${process.env.API_BASE_URL}/data/2.5/forecast?zip=${''},us&units=imperial&appid=${process.env.API_KEY}`).then((res) => {
    // console.log(res)
    return res.data;
  });

  return results;
}