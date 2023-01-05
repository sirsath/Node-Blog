const { getAllBlogs, getSingleBlogs, createBlog, updateBlog, deleteBlog, deleteAllBlog } = require("../controllers/blogController")
const Upload = require("./../middlewares/UploadMiddleWare")
const { protected } = require("./../middlewares/authMiddleware")
const router = require("express").Router()
router
    .get("/", getAllBlogs)
    .get("/:id", getSingleBlogs)
    .post("/add" , Upload.single("heroImage"), createBlog)
    .put("/update/:id", protected ,updateBlog)
    .delete("/delete/:id", protected, deleteBlog)
    .delete("/destroy", deleteAllBlog)

module.exports = router