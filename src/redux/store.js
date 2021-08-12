import { configureStore } from "@reduxjs/toolkit";
import searchWeatherReducer from "./searchByZipCodeSlice";


export default configureStore({
  reducer: {
    weather: searchWeatherReducer
  },
});