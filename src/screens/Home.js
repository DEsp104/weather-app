import React from 'react';
import Header from "../components/header/Header";
import SearchInput from "../components/searchInput/SearchInput"
import TodayWeather from "../components/todayWeather/TodayWeather";
import Forecast from "../components/forecast/Forecast"



function Home() {


  return (
    <div className="bg-dark-blue-100">
      <Header />
      <SearchInput />
      <TodayWeather />
      <Forecast />
     
    </div>
  )
}

export default Home
