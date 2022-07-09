
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setWeatherAsync,setForecastAsync } from '../../redux/slices/weather'
import TodayWeather from './TodayWeather'
import ForecastWeather from './ForecastWeather'
const LocationWeather =()=>{
    const weather = useSelector(state => state.weather.weather)
 
    const location = useSelector(state => state.location)
    const forecast = useSelector(state => state.weather.forecast)

    const converter = (f) => {
        let feri = parseInt(f)
        return JSON.parse(Math.round((feri - 32) / 1.8))
    }
const dispath = useDispatch()
    useEffect(()=>{
        dispath(setForecastAsync(location.Key))
             dispath(setWeatherAsync(location.Key))
             

    },[location.Key])

   

    

    
    return (<>
    <div  style={{display:'flex',flexDirection:'column',height:'100%'}}>
    <div style={{display:'flex',justifyContent:'center'}}>
    <TodayWeather converter={converter} location = {location}weather ={weather} ></TodayWeather>
   
    </div>
    <ForecastWeather  converter={converter} forecast = {forecast}></ForecastWeather>

    </div>
    </>)
}

export default LocationWeather