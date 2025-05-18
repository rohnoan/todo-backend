import {Router } from 'express';


const authRouter=Router();

authRouter.post('/sign-in',signUp)
authRouter.post('/sign-in',signIn)
authRouter.post('/sign-in',signOut)

export default authRouter;