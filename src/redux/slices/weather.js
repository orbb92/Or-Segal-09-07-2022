import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import {  toast } from 'react-toastify';

const example = [
  {
    "LocalObservationDateTime": "2022-07-08T17:48:00+03:00",
    "EpochTime": 1657291680,
    "WeatherText": "Sunny",
    "WeatherIcon": 1,
    "HasPrecipitation": false,
    "PrecipitationType": null,
    "IsDayTime": true,
    "Temperature": {
      "Metric": {
        "Value": 30,
        "Unit": "C",
        "UnitType": 17
      },
      "Imperial": {
        "Value": 86,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "MobileLink": "http://www.accuweather.com/en/il/kefar-sava/212472/current-weather/212472?lang=en-us",
    "Link": "http://www.accuweather.com/en/il/kefar-sava/212472/current-weather/212472?lang=en-us"
  }
]

const forecast = {
  "Headline": {
    "EffectiveDate": "2022-07-09T08:00:00+03:00",
    "EffectiveEpochDate": 1657342800,
    "Severity": 4,
    "Text": "Pleasant this weekend",
    "Category": "mild",
    "EndDate": null,
    "EndEpochDate": null,
    "MobileLink": "http://www.accuweather.com/en/il/kefar-sava/212472/daily-weather-forecast/212472?lang=en-us",
    "Link": "http://www.accuweather.com/en/il/kefar-sava/212472/daily-weather-forecast/212472?lang=en-us"
  },
  "DailyForecasts": [
    {
      "Date": "2022-07-08T07:00:00+03:00",
      "EpochDate": 1657252800,
      "Temperature": {
        "Minimum": {
          "Value": 71,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 90,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 1,
        "IconPhrase": "Sunny",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 34,
        "IconPhrase": "Mostly clear",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/il/kefar-sava/212472/daily-weather-forecast/212472?lang=en-us",
      "Link": "http://www.accuweather.com/en/il/kefar-sava/212472/daily-weather-forecast/212472?lang=en-us"
    },
    {
      "Date": "2022-07-09T07:00:00+03:00",
      "EpochDate": 1657339200,
      "Temperature": {
        "Minimum": {
          "Value": 71,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 88,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 1,
        "IconPhrase": "Sunny",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 38,
        "IconPhrase": "Mostly cloudy",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/il/kefar-sava/212472/daily-weather-forecast/212472?day=1&lang=en-us",
      "Link": "http://www.accuweather.com/en/il/kefar-sava/212472/daily-weather-forecast/212472?day=1&lang=en-us"
    },
    {
      "Date": "2022-07-10T07:00:00+03:00",
      "EpochDate": 1657425600,
      "Temperature": {
        "Minimum": {
          "Value": 72,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 88,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 1,
        "IconPhrase": "Sunny",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 34,
        "IconPhrase": "Mostly clear",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/il/kefar-sava/212472/daily-weather-forecast/212472?day=2&lang=en-us",
      "Link": "http://www.accuweather.com/en/il/kefar-sava/212472/daily-weather-forecast/212472?day=2&lang=en-us"
    },
    {
      "Date": "2022-07-11T07:00:00+03:00",
      "EpochDate": 1657512000,
      "Temperature": {
        "Minimum": {
          "Value": 70,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 86,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 1,
        "IconPhrase": "Sunny",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 34,
        "IconPhrase": "Mostly clear",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/il/kefar-sava/212472/daily-weather-forecast/212472?day=3&lang=en-us",
      "Link": "http://www.accuweather.com/en/il/kefar-sava/212472/daily-weather-forecast/212472?day=3&lang=en-us"
    },
    {
      "Date": "2022-07-12T07:00:00+03:00",
      "EpochDate": 1657598400,
      "Temperature": {
        "Minimum": {
          "Value": 72,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 88,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 2,
        "IconPhrase": "Mostly sunny",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 34,
        "IconPhrase": "Mostly clear",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/il/kefar-sava/212472/daily-weather-forecast/212472?day=4&lang=en-us",
      "Link": "http://www.accuweather.com/en/il/kefar-sava/212472/daily-weather-forecast/212472?day=4&lang=en-us"
    }
  ]
}
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
        //state.weather = action.payload;
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
  //DONE
  // const res = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${process.env.REACT_APP_API_KEY}`)
 // return res.data
 return example
})

export const setForecastAsync = createAsyncThunk('setForecast', async (key) => {
  /////DONE
console.log(key)
 // const res = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${process.env.REACT_APP_API_KEY}`)
  // return res.data
  return forecast
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, setWeather } = weatherSlice.actions

export default weatherSlice.reducer