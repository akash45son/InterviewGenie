const {Router} = require('express');//to create a new router instance
const authController = require('../controllers/auth.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const authRouter = Router();


//register route to handle user registration requests. 
authRouter.post('/register', authController.registerUserController)

//login route to handle user login requests.
authRouter.post('/login', authController.loginUserController)

//logout route to handle user logout requests.
authRouter.get('/logout', authController.logoutUserController)

//get-me route to retrieve the authenticated user's information.
authRouter.get('/get-me', authMiddleware.authUser,authController.getMeController)

module.exports = authRouter; 

