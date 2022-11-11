



import { createSlice } from "@reduxjs/toolkit";


export const ReduxSlice=createSlice({
    name:'slice',
    initialState:{
      adminSignIn:false,
      userSignInfo:[],
      orderInfo:[]
       
        


    },

    reducers:{
        adminSignInAction:(state,action)=>{
            state.adminSignIn=action.payload
        },
        userSignInAction:(state,action)=>{
            state.userSignInfo=action.payload
        },
        orderBookingInfo:(state,action)=>{
            state.orderInfo=action.payload
        },
      
      
    

    }
})


export const {adminSignInAction,userSignInAction,orderBookingInfo}=ReduxSlice.actions;

export const SelectAdminSignIn=(state)=>state.reduxstore.adminSignIn
export const SelectUserSignIn=(state)=>state.reduxstore.userSignInfo
export const SelectOrderInfo=(state)=>state.reduxstore.orderInfo




export default ReduxSlice.reducer