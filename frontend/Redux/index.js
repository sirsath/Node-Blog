import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import BlogSlice from "./BlogSlice";

const store = configureStore({
    reducer: {
        auth : authSlice ,
        blog : BlogSlice
    }
})

export default store    