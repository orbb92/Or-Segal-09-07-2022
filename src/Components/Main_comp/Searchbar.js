
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { setLoaction } from '../../redux/slices/location';
import {  toast } from 'react-toastify';
import PulseLoader from "react-spinners/PulseLoader";

import _ from 'lodash'
const Searchbar = () => {
   



    const dispath = useDispatch()

    const [data, setData] = React.useState([


    ])
    const [loading, setLoading] = React.useState(false)


    const getSearchData = async (e) => {
        //READY

        console.log(e.target.value)
        try{
            const res = await axios.get(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${process.env.REACT_APP_API_KEY}&q=${e.target.value}`)

            if (e.target.value === '')

                setData([])
            else

                setData(res.data)
        }
        catch(e){


           toast.error(e.message+', exceeded 50 requests', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                });
        }

       
    }

    const debounce = (func) => {
        let timer;
        return function (...args) {
            setLoading(true)
            const context = this
            if (timer)
                clearTimeout(timer)
            timer = (setTimeout(() => {
                timer = null
                setLoading(false)
                func.apply(context, args)
            }, 500))
        }
    }

    const debounceSearch = React.useCallback(debounce(getSearchData), [])
    return (
        <div style={{display:'flex'}}>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={data}
                sx={{ width: 300 }}
                getOptionLabel={(tags) => {
                    return tags.LocalizedName
                }}

                onInputChange={debounceSearch}
                onChange={async (e, element) => {
                    console.log(element)
                    dispath(setLoaction(element))



                }}
                renderInput={(params) => {
                    return <TextField {...params} label="Location" />
                }}
            />
             <PulseLoader size={'7'} color={'#1976d2'} cssOverride={{
                
                position:'fixed',
                
            }}  loading={loading}></PulseLoader>
        </div>
    )
}


export default Searchbar