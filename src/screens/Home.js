import React from 'react';
import Header from "../components/header/Header";
import SearchInput from "../components/searchInput/SearchInput"
import Forecast from "../components/forecast/Forecast"



function Home() {


  return (
    <div className="bg-dark-blue-100">
      <Header />
      <SearchInput />
      <Forecast />
     
    </div>
  )
}

export default Home
