import { configureStore, createReducer } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";

const Appstore = configureStore({
    reducer:{
        cart :CartSlice
    }
});

export default Appstore;