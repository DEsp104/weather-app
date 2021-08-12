import React from 'react';
import Header from "../components/header/Header";
import SearchInput from "../components/searchInput/SearchInput"
import TodayWeather from "../components/todayWeather/TodayWeather";
import Forecast from "../components/forecast/Forecast"



function Home() {


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
