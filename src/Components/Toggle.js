
import { useDispatch, useSelector } from 'react-redux'
import {toggle} from '../redux/slices/scale'
const Toggle = () => {
    const dispath=useDispatch()
    return (
        <><div style ={{position:'absolute',right:'0',height:'100%',alignItems:'center',display:'flex',fontWeight:'bold'}}>
            <span style={{paddingRight:'10px'}}>F/C</span>
            <label className="switch">
            
                <input type="checkbox"  onChange={e=>{
                    
                    dispath(toggle())
                }}></input>

                <span className="slider round" style={{color:'black'}}>  </span>
                asd
            </label>
            
            </div>
            
            </>

    )
}


export default Toggle