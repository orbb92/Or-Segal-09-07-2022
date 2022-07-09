import { createSlice } from '@reduxjs/toolkit'


export const scaleSlice = createSlice({
    name: 'scale',
    initialState: {

         mode:false
    },
    reducers: {


        toggle: (state, action) => {
          
           state.mode=!state.mode
            
        },
      

        
    },
})

// Action creators are generated for each case reducer function
export const { toggle } = scaleSlice.actions

export default scaleSlice.reducer