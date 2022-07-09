
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { setLoaction } from '../../redux/slices/location';
import {  toast } from 'react-toastify';

import _ from 'lodash'
const Searchbar = () => {
    const key = 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=hv7wlAJCzUSPZ1CZ3EyH0IlOkRBvaprR'

    const autoCompleteURL = `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=hv7wlAJCzUSPZ1CZ3EyH0IlOkRBvaprR&q=kefar`

    let check = [
        {
            "Version": 1,
            "Key": "212472",
            "Type": "City",
            "Rank": 45,
            "LocalizedName": "Kefar Sava",
            "Country": {
                "ID": "IL",
                "LocalizedName": "Israel"
            },
            "AdministrativeArea": {
                "ID": "M",
                "LocalizedName": "Central District"
            }
        },
        {
            "Version": 1,
            "Key": "215643",
            "Type": "City",
            "Rank": 75,
            "LocalizedName": "Kefar HaRif",
            "Country": {
                "ID": "IL",
                "LocalizedName": "Israel"
            },
            "AdministrativeArea": {
                "ID": "D",
                "LocalizedName": "Southern District"
            }
        },
        {
            "Version": 1,
            "Key": "213147",
            "Type": "City",
            "Rank": 75,
            "LocalizedName": "Kefar Glickson",
            "Country": {
                "ID": "IL",
                "LocalizedName": "Israel"
            },
            "AdministrativeArea": {
                "ID": "HA",
                "LocalizedName": "Haifa"
            }
        },
        {
            "Version": 1,
            "Key": "212533",
            "Type": "City",
            "Rank": 75,
            "LocalizedName": "Kefar Bilu",
            "Country": {
                "ID": "IL",
                "LocalizedName": "Israel"
            },
            "AdministrativeArea": {
                "ID": "M",
                "LocalizedName": "Central District"
            }
        },
        {
            "Version": 1,
            "Key": "212534",
            "Type": "City",
            "Rank": 75,
            "LocalizedName": "Kefar Bin Nun",
            "Country": {
                "ID": "IL",
                "LocalizedName": "Israel"
            },
            "AdministrativeArea": {
                "ID": "M",
                "LocalizedName": "Central District"
            }
        },
        {
            "Version": 1,
            "Key": "212535",
            "Type": "City",
            "Rank": 75,
            "LocalizedName": "Kefar Daniyyel",
            "Country": {
                "ID": "IL",
                "LocalizedName": "Israel"
            },
            "AdministrativeArea": {
                "ID": "M",
                "LocalizedName": "Central District"
            }
        },
        {
            "Version": 1,
            "Key": "212536",
            "Type": "City",
            "Rank": 75,
            "LocalizedName": "Kefar HaRo'e",
            "Country": {
                "ID": "IL",
                "LocalizedName": "Israel"
            },
            "AdministrativeArea": {
                "ID": "M",
                "LocalizedName": "Central District"
            }
        },
        {
            "Version": 1,
            "Key": "212538",
            "Type": "City",
            "Rank": 75,
            "LocalizedName": "Kefar Malal",
            "Country": {
                "ID": "IL",
                "LocalizedName": "Israel"
            },
            "AdministrativeArea": {
                "ID": "M",
                "LocalizedName": "Central District"
            }
        },
        {
            "Version": 1,
            "Key": "212539",
            "Type": "City",
            "Rank": 75,
            "LocalizedName": "Kefar Marmorek",
            "Country": {
                "ID": "IL",
                "LocalizedName": "Israel"
            },
            "AdministrativeArea": {
                "ID": "M",
                "LocalizedName": "Central District"
            }
        },
        {
            "Version": 1,
            "Key": "215844",
            "Type": "City",
            "Rank": 75,
            "LocalizedName": "Kefar HaYaroq",
            "Country": {
                "ID": "IL",
                "LocalizedName": "Israel"
            },
            "AdministrativeArea": {
                "ID": "TA",
                "LocalizedName": "Tel Aviv"
            }
        }
    ]




    const dispath = useDispatch()

    const [data, setData] = React.useState([


    ])

    const getSearchData = async (e) => {
        //READY

        console.log(e.target.value)
        try {
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
//setData(check)
       
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