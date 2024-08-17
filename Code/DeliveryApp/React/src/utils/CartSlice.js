import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name : 'cart',
    initialState : {
        items: []
    },
    reducers  :{
        additem : (state, action) =>{
            state.items.push(action.payload);
        },
        removeItem : (state, action) =>{
            state.items.pop();

        },
        clearCart : (state) =>{
            state.items.length = 0
        }
    }
});

export default CartSlice.reducer;

export const {additem,removeItem,clearCart} = CartSlice.actions;