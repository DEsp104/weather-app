import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getWeather } from "../services/fetchWeather";



export const fetchWeatherForecast = createAsyncThunk(
  "weather/fetchWeatherForecast",
  async ({ zipcode }) => {
    console.log("From the slice", zipcode);
    
    const data = getWeather({ zipcode })
    console.log("Weather Slice:" + data )

    return data;
  }
);


const searcByZipCodeSlice = createSlice({
  name: "weather",
  initialState: {
    status: null,
    weatherForecast: null,
  },


  extraReducers: {
    [fetchWeatherForecast.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchWeatherForecast.fulfilled]: (state, {payload}) => {
      state.status = "success";
      state.weatherForecast = payload;
    },
    [fetchWeatherForecast.rejected]: (state, action) => {
      state.status = "failed";
    },

  },


})

export default searcByZipCodeSlice.reducer;