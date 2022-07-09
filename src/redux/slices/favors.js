import { createSlice } from '@reduxjs/toolkit'


export const foavorSlice = createSlice({
    name: 'favors',
    initialState: {

         Favorites:[]
    },
    reducers: {


        addFavor: (state, action) => {
            state.Favorites.push(action.payload)
           
            
        },
        deleteFavor: (state, action) => {
           
        
           state.Favorites= state.Favorites.filter(f=>f.location.Key!==action.payload)
            
            
        }

        
    },
})

export const { addFavor,deleteFavor } = foavorSlice.actions

export default foavorSlice.reducer