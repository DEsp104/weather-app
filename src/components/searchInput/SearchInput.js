import { useState, useEffect } from 'react';
import { SearchIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherForecast } from "../../redux/searchByZipCodeSlice";



function Search() {
  const [zipcode, setZipCode] = useState("10001");
  const weather = useSelector((state) => state?.weather?.weatherForecast?.list)
  const dispatch = useDispatch();

  console.log(weather)

  const getWeatherZipCode = (e) => {
    e.preventDefault()
    
    if (zipcode.length > 0 && zipcode !== "10001")  {
      dispatch(fetchWeatherForecast({ zipcode }))
      console.log(weather)
    }
  }

  useEffect(() => {
    dispatch(fetchWeatherForecast({ zipcode }))
  }, [])


  return (
    <form className="space-y-6" action="#" method="POST">
      
      <div className="flex items-center justify-center">
        <div className="search-input my-auto flex xs:flex-col xs:mx-4 xxs:flex-col xxs:mx-4 justify-center items-center rounded-md mb-12 w-1/2">
              <div className=" md:mx-10 mx-0 w-full relative flex items-stretch flex-grow focus-within:z-10">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">

                <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="number"
              name="searchInput"
              id="searchInput"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-full pl-10 sm:text-sm border-gray-300"
              placeholder="Zip Code"
              onChange={e => { setZipCode(e.target.value)} }
            />
            </div>
        </div>

        <div className="flex items-center justify-center p-6 rounded-b">
            <button
               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold font-medium text-spring-wood-500 bg-vin-rouge-500 hover:bg-vin-rouge-700 focus:outline-none focus:ring-2 focus:ring-offset focus:ring-indigo-500"
               type="submit"
                onClick={
                  (e) => {
               
                //     setAdd(true)
                    getWeatherZipCode(e)
                  }
                }
            >
                Search
            </button>
        </div>
      </div>
    </form>
  )
}

export default Search
