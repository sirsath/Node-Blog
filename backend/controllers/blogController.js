const Blog = require("./../models/Blog")
exports.getAllBlogs = async (req, res) => {
    console.log(req.query);
    try {
        const total = await Blog.countDocuments()
        const perpage = req.query.limit ? req.query.limit : 5
        const skipRecords = req.query.skip ? req.query.skip  : 0
        const result = await 
        Blog
        .find()
        .skip(skipRecords * perpage)
        .limit(perpage)
        .populate('auther' , "name -_id")
        res.json({
            success: true,
            message: "All Blogs Fetches Successfuly",
            result : {
                blogs : result ,
                count  : total

            }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error" + error
        })
    }
}
exports.getSingleBlogs = async (req, res) => {
    try {
        const result = await Blog.findById(req.params.id).populate("auther" , "name -_id")
        res.json({
            success: true,
            message: "Blogs Fetches Successfuly",
            count: result.length,
            result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error" + error
        })
    }
}
exports.createBlog = async (req, res) => {
    try {
        await Blog.create(req.body)
        res.json({
            success: true,
            message: "Blogs Created Successfuly",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error" + error
        })
    }
}
exports.updateBlog = async (req, res) => {
    try {
        await Blog.findByIdAndUpdate(req.params.id, req.body)
        res.json({
            success: true,
            message: "Blogs Updated Successfuly",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error" + error
        })
    }
}
exports.deleteBlog = async (req, res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id)
        res.json({
            success: true,
            message: "Blogs Delete Successfuly",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error" + error
        })
    }
}
exports.deleteAllBlog = async (req, res) => {
    try {
        await Blog.deleteMany()
        res.json({
            success: true,
            message: "All Blogs Delete Successfuly",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error" + error
        })
    }
}