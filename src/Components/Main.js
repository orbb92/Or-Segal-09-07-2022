import * as React from 'react';
import Searchbar from './Main_comp/Searchbar';
import LocationWeather from './Main_comp/LoacationWeather';


const Main = () => {
   
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', alignItems: 'center', paddingTop: '2.5%' }}>
                <div style={{display:'flex',alignItems: 'center'}} >
                    
                    <Searchbar></Searchbar>
                               
                </div>
                <LocationWeather></LocationWeather>
            </div>
        </>
    );
};
export default Main;








