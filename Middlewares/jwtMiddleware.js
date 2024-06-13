const jwt=require('jsonwebtoken')

const jwtMiddlewareFun=(req,res,next)=>{
    console.log("Inside jwtMiddleware")
    try{
        const token=req.headers.authorization.split(" ")[1]
        if(token){
            const result=jwt.verify(token,process.env.SECRET_KEY)
            console.log(result)
            const {userId}=result
            req.payload=userId
            next()
        }
        else{
            res.status(406).json("Please Login First!!")
        }
    }
    catch{
        res.status(406).json("Please Login")
    }

}

module.exports=jwtMiddlewareFun