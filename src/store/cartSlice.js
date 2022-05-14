//slices can be used to store out data in slices, i.e can store user data in one slice, cart data in one slice,etc.
import {createSlice} from '@reduxjs/toolkit'

const cartSlice=createSlice({
    name: 'cart',
    initialState:[],
    //reducers are pure functions which allows to mutate our state,
    //here our reducer will add and remove items from cart
    reducers:{
        add(state,action){
           state.push(action.payload);
        },
        remove(state,action)
        {
           return state.filter((item)=>item.id!==action.payload);
        }
    }
})

//exporting actions(add,remove)
export const{add,remove}=cartSlice.actions;
export default cartSlice.reducer;