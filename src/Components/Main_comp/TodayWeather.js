
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux'
import { deleteFavor, addFavor } from '../../redux/slices/favors';
import { toast } from 'react-toastify';

const TodayWeather = (props) => {
    const weather = props.weather
    const location = props.location
    const scale = useSelector(state => state.scale.mode)
    const dispatch = useDispatch()
    const favorites = useSelector(state => state.favors.Favorites)
    const exists = favorites.find(f => f.location.Key == props.location.Key) === undefined ? '' : 'none'
    const converter = (f) => {
        let feri = parseInt(f)
        return Math.round((feri - 32) / 1.8)
    }
    return (
        <div style={{ marginTop: '5%', }}>
            <Card sx={{ minWidth: 250, minHeight: 200 }}>
                <CardContent>

                    <Typography variant="h5" fontWeight="bold" component="div">
                        {props.location.LocalizedName}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} component='div'>
                        {
                        
                                    
                        scale?converter(props.weather[0].Temperature.Imperial.Value):(props.weather[0].Temperature.Imperial.Value)}{scale?'F':<sup>o</sup>}
                    </Typography>
                    <Typography variant="body2">
                        {props.weather[0].WeatherText}

                    </Typography>
                    {props.favor ? <Button onClick={() => {
                        dispatch(deleteFavor(props.location.Key))
                    }} size="small" color="primary">
                        Remove
                    </Button> : <img style={{ display: exists }} onClick={() => {

                        dispatch(addFavor({ weather, location }))
                        toast.success(`🦄 Added ${props.location.LocalizedName} to favorites`, {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    }} className='favor' src='https://cdn-icons-png.flaticon.com/512/2107/2107845.png' ></img>}

                </CardContent>

            </Card>
        </div>
    )
}


export default TodayWeather