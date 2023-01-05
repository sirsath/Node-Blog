import { createSlice } from "@reduxjs/toolkit";
import { addBlog,  getBlogAction, getSingleBlogAction } from "./BlogAction";


const BlogSlice = createSlice({
    name: "blog",
    initialState: { getBlog : []},
    reducers: {},
    extraReducers: (bluider) => {
        bluider
            .addCase(addBlog.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(addBlog.fulfilled, (state, { payload }) => {
                state.loading = false
                state.blogAdded = true
            })
            .addCase(addBlog.rejected, (state, { payload }) => {
                state.loading = false
                state.blogerror = payload
            })
            .addCase(getBlogAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(getBlogAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.getBlog = payload.blogs
                state.totalBlogs = payload.count
            })
            .addCase(getBlogAction.rejected, (state, { payload }) => {
                state.loading = false
                state.blogerror = payload
            })
            .addCase(getSingleBlogAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(getSingleBlogAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.singleBlog = payload
            })
            .addCase(getSingleBlogAction.rejected, (state, { payload }) => {
                state.loading = false
                state.singleblogerror = payload
            })
    }
})
export default BlogSlice.reducer