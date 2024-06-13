const express=require('express')
const productController=require('../Controllers/productController')
const userController=require('../Controllers/userController')
// const { addToWishlist } = require('../Controllers/wishlistController')
const jwtMiddle=require('../Middlewares/jwtMiddleware')
const wishController=require('../Controllers/wishlistController')

const router=new express.Router()

router.get('/all-products',productController.allProducts)
router.get('/single-product/:id',productController.singleProduct)
router.post('/register',userController.userRegister)
router.post('/login',userController.userLogin)
router.post('/addwish',jwtMiddle,wishController.addToWishlist)

module.exports=router