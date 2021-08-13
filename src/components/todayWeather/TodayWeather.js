import React from 'react';
import { useSelector } from 'react-redux';

function TodayWeather() {

  const todayWeather = useSelector((state) => state?.weather?.weatherForecast?.list[0]);
  const locationInfo = useSelector((state) => state?.weather?.weatherForecast);


  //Time-Date
  const currentTime = new Date();
  const timeZoneValue = locationInfo?.city?.timezone / 3600;
  const tzDifference = timeZoneValue * 60 + currentTime.getTimezoneOffset();
  const offSetTime = new Date(currentTime.getTime() + tzDifference * 60 * 1000);
  

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  const date = offSetTime.toLocaleTimeString('en-US', options)


  return (
    
<div className="min-h-screen flex flex-col items-center mt-20">
<div className="flex flex-col bg-soapstone-500 rounded p-4 w-full max-w-xs rounded-md">
        <div className="font-bold text-xl">{ locationInfo?.city?.name }</div>
        <div className="text-sm text-gray-500">{ date }</div>
						<div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
          <img src={`http://openweathermap.org/img/wn/${todayWeather?.weather[0]?.icon}@2x.png`} />
						</div>
						<div className="flex flex-row items-center justify-center mt-6">
          <div className="font-medium text-6xl">{ Math.floor(todayWeather?.main?.temp)}°</div>
							<div className="flex flex-col items-center ml-6">
            <div>{  todayWeather?.weather[0]?.main }</div>
								<div className="mt-1">
									<span className="text-sm"><i className="far fa-long-arrow-up"></i></span>
              <span className="text-sm font-light text-gray-500">{ Math.floor(todayWeather?.main?.temp_max) }°C</span>
								</div>
								<div>
									<span className="text-sm"><i className="far fa-long-arrow-down"></i></span>
									<span className="text-sm font-light text-gray-500">{ Math.floor(todayWeather?.main?.temp_min) }°C</span>
								</div>
							</div>
						</div>
						<div className="flex flex-row justify-between mt-6">
							<div className="flex flex-col items-center">
								<div className="font-medium text-sm">Wind</div>
								<div className="text-sm text-gray-500">{ Math.floor(todayWeather?.wind?.speed) }m/h</div>
							</div>
							<div className="flex flex-col items-center">
								<div className="font-medium text-sm">Humidity</div>
								<div className="text-sm text-gray-500">{ Math.floor(todayWeather?.main?.humidity) }%</div>
							</div>
							<div className="flex flex-col items-center">
								<div className="font-medium text-sm">Visibility</div>
								<div className="text-sm text-gray-500">{ Math.floor(todayWeather?.visibility / 1000) }km</div>
							</div>
						</div>
					</div>
</div>
  )
}

export default TodayWeather
