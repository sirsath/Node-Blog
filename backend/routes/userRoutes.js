const { getAllRegisteredUser, registerUser, DeletUser, loginUser } = require("../controllers/userController")

const router = require("express").Router()

router
    .get("/", getAllRegisteredUser)
    .post("/register", registerUser)
    .delete("/destroy", DeletUser)
    .post("/login", loginUser)

module.exports = router

