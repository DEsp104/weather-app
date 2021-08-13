import React from 'react'
import { useSelector } from 'react-redux';



function Forecast() {

  const todayWeather = useSelector((state) => state?.weather?.weatherForecast?.list[0]);
  const locationInfo = useSelector((state) => state?.weather?.weatherForecast);
  const list = useSelector((state) => state?.weather?.weatherForecast?.list);
  console.log(list)


  //Time-Date
  const currentTime = new Date();
  const timeZoneValue = locationInfo?.city?.timezone / 3600;
  const tzDifference = timeZoneValue * 60 + currentTime.getTimezoneOffset();
  const offSetTime = new Date(currentTime.getTime() + tzDifference * 60 * 1000);
  

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  const date = offSetTime.toLocaleTimeString('en-US', options);



  return (
    <div className="mx-auto p-4 bg-purple-400 h-screen flex justify-center">
      <div className="flex flex-wrap">
        <div className="w-full px-2">
          <div className="bg-gray-900 text-white relative min-w-0 break-words rounded-lg overflow-hidden shadow-sm mb-4 w-full bg-white dark:bg-gray-600">
            <div className="px-6 py-6 relative">
              <div className="flex mb-4 justify-between items-center">
                <div>
                    <h5 className="mb-0 font-medium text-xl text-soapstone-500">{ locationInfo?.city?.name }</h5>
                    <h6 className="mb-0 text-soapstone-500">{ date }</h6><small className="text-soapstone-500">Cloudy</small>
                  
                </div>
                <div className="text-right">
                            <h3 className="font-bold text-4xl mb-0 text-soapstone-500"><span>{ Math.floor(todayWeather?.main?.temp) }°</span></h3>
                </div>
              </div>
              <div className="block sm:flex justify-between items-center flex-wrap">
                        <div className="w-full sm:w-1/2">
                            <div className="flex mb-2 justify-between items-center text-soapstone-500"><span>Temp</span><small className="px-2 inline-block">{todayWeather?.main?.temp}°</small></div>
                        </div>
                        <div className="w-full sm:w-1/2">
                  <div className="flex mb-2 justify-between items-center text-soapstone-500"><span>Feels like</span><small className="px-2 inline-block">{todayWeather?.main?.feels_like}°</small></div>
                        </div>
                        <div className="w-full sm:w-1/2 text-soapstone-500">
                            <div className="flex mb-2 justify-between items-center"><span>Temp min</span><small className="px-2 inline-block">{ Math.floor(todayWeather?.main?.temp_min) }°</small></div>
                        </div>
                        <div className="w-full sm:w-1/2 text-soapstone-500">
                            <div className="flex mb-2 justify-between items-center"><span>Temp max</span><small className="px-2 inline-block">{ Math.floor(todayWeather?.main?.temp_max) }°</small></div>
                        </div>
              </div>
            </div>

            <div class="divider table mx-2 text-center bg-transparent whitespace-nowrap text-soapstone-500">
              <span class="inline-block px-3"><small>Forecast</small></span>
            </div>

            
            <div class="px-6 py-6 relative text-soapstone-500">
              <div class="text-center justify-between items-center flex" style={{flexFlow: "initial"}}>
                {
                  list.filter((e, i) =>i % 8 === 8 - 1).map((day, index) => {

                  const timeStamp = day.dt
                  const milliseconds = timeStamp * 1000
                  let dateObj = new Date(milliseconds)
                  let weekdays = dateObj.toLocaleString("en-US", { weekday: "long" })
                  
                    console.log(weekdays)
                    
                    return <div class="text-center mb-0 flex items-center justify-center flex-col">
                      <span class="block my-1">{weekdays}</span>
                    <img src={`http://openweathermap.org/img/wn/${day?.weather[0]?.icon}@2x.png`} />
                      <span class="block my-1">{Math.floor(day?.main?.temp)}°</span>
                  </div>
                  })
                  
              
                }
              </div>
            </div>



          </div>
        </div>
      </div>

    </div>

  )
}

export default Forecast
