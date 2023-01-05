const user = require("./../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
exports.registerUser = async (req, res) => {
    try {
        const f = await user.findOne({ email: req.body.email })
        if (f) {
            return res.status(400).json({
                success: false,
                message: "email already exist, please login or use another email"
            })
        }
        req.body.password = bcrypt.hashSync(req.body.password)


        const result = await user.create(req.body)
        const token = jwt.sign({ id: result._id },
            process.env.JWT_KEY, { expiresIn: "1d"})
        res.json({
            success: true,
            message: `${result.name} registered successfully`,
            result: {
                name: result.name,
                email: result.email,
                id : result._id ,

                token
            }
        })
    } catch (error) {
        res.status(400).json({
            message: `Error ${error.message}`
        })
    }
}
exports.getAllRegisteredUser = async (req, res) => {
    try {
        const result = await user.find()
        res.json({
            success: true,
            count: result.length,
            message: `All Users Fetched successfully`,
            result
        })
    } catch (error) {
        res.status(400).json({
            message: `Error ${error.message}`
        })
    }
}

exports.loginUser = async (req, res) => {
    try {
        const result = await user.findOne({ email: req.body.email })
        if (!result) {
            return res.status(401).json({
                success: false,
                message: "Email Not Found"
            })
        }
        const verify = bcrypt.compareSync(req.body.password, result.password)
        if (!verify) {
            return res.status(401).json({
                success: false,
                message: "password do not match"
            })
        }
        const token = jwt.sign({ id: result._id },
            process.env.JWT_KEY, { expiresIn: "1d" })

        res.json({
            success: true,
            message: "login success",
            result: {
                name: result.name,
                email: result.email,
                id : result._id ,
                token
            }
        })
    } catch (error) {
        res.status(400).json({
            message: `Error ${error.message}`
        })

    }
}

exports.DeletUser = async (req, res) => {
    try {
        const result = await user.deleteMany()
        res.json({
            success: true,
            message: "Delet all user",
            result
        })
    } catch (error) {
        res.json({
            message: `Error + ${error.message}`
        })
    }
}