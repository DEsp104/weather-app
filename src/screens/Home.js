import React from 'react';
import Header from "../components/header/Header";
import SearchInput from "../components/searchInput/SearchInput"
import TodayWeather from "../components/todayWeather/TodayWeather";
import Forecast from "../components/forecast/Forecast"
import dotenv from 'dotenv';
dotenv.config();




function Home() {


  // `${process.env.API_BASE_URL}
  // process.env.API_KEY

  return (
    <div>
      <Header />
      <SearchInput />
      <Forecast />
      <TodayWeather />
    </div>
  )
}

export default Home
