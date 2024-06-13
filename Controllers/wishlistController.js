const wishlists=require('../Models/wishlistModel')

exports.addToWishlist=async (req,res)=>{
    try{
        const {id,title,description,price,category,image,rating}=req.body
        const userId=req.payload

        const existingProduct=await wishlists.findOne({userId,id})
        if(existingProduct){
            res.status(406).json('Product already added')
        }
        else{
            const newWish=new wishlists({
                id,title,description,price,category,image,rating,userId
            })
            await newWish.save()
            res.status(200).json(newWish)
        }
    }
    catch(err){
        console.log(err)
        res.status(401).json(err)
    }
}

exports.getWishList=async(req,res)=>{
    try{
        const userId=req.payload
        const result=await wishlists.find({userId})
        res.status(200).json(result)
    }
    catch(err){
        console.log(err)
        res.status(401).json(err)
    }
}

exports.removeWish=async(req,res)=>{
    try{
        const wid=req.params.id
        const result=await wishlists.findByIdAndDelete({_id:wid})
        res.status(200).json("item removed!")
    }
    catch(err){
        console.log(err)
        res.status(401).json(err)
    }
}