import {  useSelector } from 'react-redux'
import TodayWeather from './Main_comp/TodayWeather';
const Favor = () => {
    const favorites = useSelector(state => state.favors.Favorites)
    
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

                        return <TodayWeather location={favor.location} weather={favor.weather} favor={true} ></TodayWeather>
                    })}

            </div>
        </>
    );
};
export default Favor;
