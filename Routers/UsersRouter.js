import express from "express"
import UsersController from "../Controllers/UsersController.js"

const usersRouter=express.Router();

usersRouter.get('/enteries',UsersController.getEnteries);
usersRouter.post('/addUser',UsersController.addUser);
usersRouter.delete('/deleteUser',UsersController.deleteUser); 

export default usersRouter;