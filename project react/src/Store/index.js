import { configureStore } from "@reduxjs/toolkit";
import CartSliceReducer from "./Slice/CartSlice";

const store=configureStore({
    reducer:{
        cart:CartSliceReducer
    }
})
export default store