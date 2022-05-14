import { createSlice } from "@reduxjs/toolkit";
// import { enterScope } from "immer/dist/internal";
export const STATUSES= Object.freeze( {
    IDLE:'idle',
    ERROR:'error',
    LOADING:'loading'
});
 const productSlice=createSlice({
     name:'product',
     initialState: {
         data:[],
         status:STATUSES.IDLE,
     },
     reducers:
     {
         //cannot call any synchronous call in redux, for this type of jobs we use thunk
       setProducts(state,action){
           state.data=action.payload
       },
       setStatus(state,action)
       {
           state.status=action.payload
       }
     }
 });

 //thunks are normal functions
 export const{setProducts,setStatus}=productSlice.actions;
 export default productSlice.reducer;

 //thunk
 export function fetchProducts()
 {
     //thunk function returns other function
     return async function fetchProductThunk(dispatch,getState){
         dispatch(setStatus(STATUSES.LOADING));
        try {
            const url = "https://fakestoreapi.com/products";
            const resp = await fetch(url);
            const data = await resp.json();
            dispatch(setProducts(data));
            dispatch(setStatus(STATUSES.IDLE));
        } catch (error) {
            console.log(error);
            dispatch(setStatus(STATUSES.ERROR));
        }
     }
 }