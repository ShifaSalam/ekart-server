const express=require('express')
const productController=require('../Controllers/productController')
const userController=require('../Controllers/userController')
const jwtMiddle=require('../Middlewares/jwtMiddleware')
const wishController=require('../Controllers/wishlistController')
const cartController=require('../Controllers/cartController')

const router=new express.Router()

router.get('/all-products',productController.allProducts)
router.get('/single-product/:id',productController.singleProduct)

router.post('/register',userController.userRegister)
router.post('/login',userController.userLogin)

router.post('/addwish',jwtMiddle,wishController.addToWishlist)
router.get('/getwish',jwtMiddle,wishController.getWishList)
router.delete('/removewish/:id',jwtMiddle,wishController.removeWish)

router.post('/addcart',jwtMiddle,cartController.addToCart)
router.get('/getcart',jwtMiddle,cartController.getCart)
router.delete('/removecart/:id',jwtMiddle,cartController.removeCart)
router.get('/inccart/:id',jwtMiddle,cartController.increaseQuantity)
router.get('/deccart/:id',jwtMiddle,cartController.decreaseQuantity)
router.delete('/emptycart',jwtMiddle,cartController.emptyCart)

module.exports=router