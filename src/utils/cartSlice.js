import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    //createSlice takes configuration
    name : 'cart',
    //Intially we have no items i.e empty object
    initialState : {
        items : [],
    },
    //we write reducer functions
    //  corresponding to those actions and actions are like adding item to cart,removing from cart
    reducers : {
        //we can modify the state based on our action
        addItem : (state,action)=>{
            console.log("Adding to cart:", action.payload);
            state.items.push(action.payload)
        },
        //here as we dont need any action we are avoiding it
        removeItem : (state) => {
            state.items.pop();
        },
        clearCart : (state) => {
            state.items.length = 0;
        }
    }

})

//we have to export actions as well as reducers
export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;
