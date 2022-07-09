import { createSlice } from '@reduxjs/toolkit'


export const locationSlice = createSlice({
    name: 'location',
    initialState: {

         LocalizedName: 'Tel Aviv',
         Key: 215854
    },
    reducers: {


        setLoaction: (state, action) => {
            console.log(action.payload)
            state.LocalizedName = action.payload.LocalizedName
            state.Key = action.payload.Key
            
        }

        
    },
})

export const { setLoaction } = locationSlice.actions

export default locationSlice.reducer