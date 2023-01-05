import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const registerUser = createAsyncThunk("user/register", async (userData, { rejectWithValue, getState }) => {
    try {
        const { data } = await axios.post("http://localhost:5000/user/register", userData)
        console.log(data);
        // localStorage.setItem("login", JSON.stringify(data.result))
        return data.result
    } catch (error) {
        console.log(error);
        return rejectWithValue(error)
    }

})

export const userLogin = createAsyncThunk("user/login", async (loginuser, { rejectWithValue, getState }) => {
    try { 
        console.log(loginuser)
        const { data } = await axios.post("http://localhost:5000/user/login",loginuser)
        console.log("sss" , data)
        localStorage.setItem("login", JSON.stringify(data.result))
        return data.result
    } catch (error) {
        console.warn(error);
        return rejectWithValue(error)
    }
})