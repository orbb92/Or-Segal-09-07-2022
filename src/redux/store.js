import { configureStore } from '@reduxjs/toolkit'
import  weatherReducer from './slices/weather'
import locationReducer from './slices/location'
import favorReducer from './slices/favors'
import  scaleReducer from './slices/scale'
export const store = configureStore({
  reducer: {
    weather:weatherReducer,
    location:locationReducer,
    favors:favorReducer,
    scale:scaleReducer
  },
})


export default store 