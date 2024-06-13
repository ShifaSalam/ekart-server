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