import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import {  toast } from 'react-toastify';


export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    weather: [{ "LocalObservationDateTime": null, "WeatherText": null, "WeatherIcon": null, "HasPrecipitation": null, "PrecipitationType": null, "Temperature": { "Metric": {}, "Imperial": {} } }],
    forecast: {}

  },
  reducers: {


    setWeather: (state, action) => {
      state.weather = action.payload
    }
  },
  extraReducers: (builder) => {
    builder

      .addCase(setWeatherAsync.fulfilled, (state, action) => {

        state.weather = action.payload;
      })

      .addCase(setWeatherAsync.rejected, (state, action) => {
        toast.error('Couldnt retrive weather data', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          });
      })

      .addCase(setForecastAsync.fulfilled, (state, action) => {
        console.log(action)

        state.forecast = action.payload;
      })
      .addCase(setForecastAsync.rejected, (state, action) => {
        toast.error('Couldnt retrive forecast data', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          });
        state.forecast = action.payload;
      });



  },
})

export const setWeatherAsync = createAsyncThunk('setWeather', async (key) => {
 
  const res = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${process.env.REACT_APP_API_KEY}`).catch(e=>console.log(e))
  
 return res.data
})

export const setForecastAsync = createAsyncThunk('setForecast', async (key) => {

  const res = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${process.env.REACT_APP_API_KEY}`)
   return res.data
 
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, setWeather } = weatherSlice.actions

export default weatherSlice.reducer