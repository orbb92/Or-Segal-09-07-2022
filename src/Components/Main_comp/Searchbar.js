
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { setLoaction } from '../../redux/slices/location';
import {  toast } from 'react-toastify';

import _ from 'lodash'
const Searchbar = () => {
   



    const dispath = useDispatch()

    const [data, setData] = React.useState([


    ])

    const getSearchData = async (e) => {
        //READY

        console.log(e.target.value)
        
            const res = await axios.get(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${process.env.REACT_APP_API_KEY}&q=${e.target.value}`).catch(e=>{ toast.error(e.message+', exceeded 50 requests', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                });})

            if (e.target.value === '')

                setData([])
            else

                setData(res.data)
        

       
    }

    const debounce = (func) => {
        let timer;
        return function (...args) {
            const context = this
            if (timer)
                clearTimeout(timer)
            timer = (setTimeout(() => {
                timer = null
                func.apply(context, args)
            }, 500))
        }
    }

    const debounceSearch = React.useCallback(debounce(getSearchData), [])
    return (
        <div style={{}}>
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
        </div>
    )
}


export default Searchbar