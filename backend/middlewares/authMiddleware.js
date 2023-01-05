const jwt = require("jsonwebtoken")
exports.protected = (req, res, next) => {
    try {
        const token = req.headers.authorization
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Please Provide Token"
            })
        }
        jwt.verify(token, process.env.jwt_KEY)
        next()
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "error" + error
        })
    }
}