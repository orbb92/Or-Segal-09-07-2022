import TodayWeather from './Main_comp/TodayWeather';
import { useDispatch, useSelector } from 'react-redux'
import { setLoaction } from '../redux/slices/location'
import {useNavigate} from 'react-router-dom'
const Favor = () => {
    const favorites = useSelector(state => state.favors.Favorites)
    let navigate = useNavigate()
    const dispath = useDispatch()
    if (favorites.length === 0)
        return (


            <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', height: '100%', alignItems: 'center' }}>

                <h1>No favorites yet</h1>
            </div>
        )
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', height: '100%', alignItems: 'center' }}>

                {

                    favorites.map(favor => {

                        return <div style ={{cursor:'pointer'}} onClick={()=>{
                            dispath(setLoaction(favor.location))
                           navigate('/',{replace:true})
                        }}><TodayWeather location={favor.location} weather={favor.weather} favor={true} ></TodayWeather></div>
                    })}

            </div>
        </>
    );
};
export default  Favor;
