import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useSelector} from 'react-redux'
const number2days = {
    "0":'Sunday',
    "1":'Monday',
    "2":'Tuesday',
    "3":'Wednesday',
    "4":'Thursday',
    "5":'Friday',
    "6":'Saturday'
    
}

const weatherDic={
    "Sunny":'https://cdn-icons-png.flaticon.com/512/890/890347.png',
    "Mostly sunny":'https://cdn-icons-png.flaticon.com/512/3429/3429947.png'
}

const ForecastWeather = (props)=>{

  const scale = useSelector(state => state.scale.mode)

    return (
       <div style={{display:'flex',justifyContent:'space-evenly',flexWrap:'wrap',height:'100%',alignItems:'center'}}>
        { props.forecast?.DailyForecasts?.map((f,i)=>{
            return <div key={i} style={{padding:'20px'}}><Card sx={{ minWidth:200,minHeight:350}}>
          
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {number2days[new Date(f.Date).getDay()]}
              </Typography>
              <Typography gutterBottom variant="h7" component="div">
                {f.Day.IconPhrase}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {scale?props.converter(f.Temperature.Minimum.Value)+'-'+props.converter(f.Temperature.Maximum.Value):f.Temperature.Minimum.Value+'-'+f.Temperature.Maximum.Value}
              {/* {f.Temperature.Minimum.Value}-{f.Temperature.Maximum.Value} */}
              </Typography>
            </CardContent>
          
            <img className={f.Day.IconPhrase==='Sunny'?'forecastPic':''} style ={{width:'42px'}} src= {weatherDic[f.Day.IconPhrase]}>
            
            </img>
          </Card></div>
        })}
       </div>



        
    )
}

export default ForecastWeather