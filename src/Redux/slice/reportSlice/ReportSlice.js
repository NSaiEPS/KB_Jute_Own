



import { createSlice } from "@reduxjs/toolkit";


export const ReportSlice=createSlice({
    name:'slice',
    initialState:{
     reportSelect:"dsd"
       
        


    },

    reducers:{
        ReportSelectedAction:(state,action)=>{
            state.reportSelect=action.payload
        },
      
      
      
    

    }
})


export const {ReportSelectedAction}=ReportSlice.actions;

export const SelectreportSelected=(state)=>state.reduxstore.reportSelect





export default ReportSlice.reducer