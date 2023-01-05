const multer = require("multer")
const path = require("path")
const fs = require("fs")
const {v4 : uuid} = require("uuid")

const storage = multer.diskStorage({
   filename : (req , file ,cb)=>{

     const ext = path.extname(file.originalname)

     const fn = uuid() + path.extname(file.originalname)
     if (file.mimetype === "image/jpeg" && filename.mimetype !== "image/jpg" && filename.mimetype !== "image/png"  ) {

        cb("this File extion is not Supported")
        
     }else{
        req.body.heroImage = `uploads/${fn}`
         cb(null , fn)
     }

   },

   destination : (req , file ,cb)=>{
     const loc = "public/uploads"
    fs.mkdirSync(loc , {recursive : true})
    cb(null , loc)
   }
})

module.exports = multer({storage})