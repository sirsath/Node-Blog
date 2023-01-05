import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addBlog = createAsyncThunk("user/add", async (adddata, { rejectWithValue, getState }) => {
    try {
        const { data } = await axios.post("http://localhost:5000/blog/add", adddata)
        return data.result
    } catch (error) {
        console.warn(error);
        return rejectWithValue(error)
    }
})

export const getBlogAction = createAsyncThunk("user/get", async ({perpage , currentPage}, { rejectWithValue, getState }) => {
    console.log("perpage Action",perpage);
    console.log("currentpage Action",currentPage)
    try {
        const { data } = await axios.get(`http://localhost:5000/blog/?limit=${perpage}&&skip=${currentPage}`)
        return data.result
    } catch (error) {
        console.warn(error)
        return rejectWithValue(error)
    }
})

export const getSingleBlogAction = createAsyncThunk("User/getsingle", async (blog, { rejectWithValue, getState }) => {
    try {
        const { data } = await axios.get(`http://localhost:5000/blog/${blog}` )
        console.log(data.result,"single");
        return data.result
    } catch (error) {
        console.warn(error);
        return rejectWithValue(error)
    }
})

