import myExpress from "express"
import linksRouter from "./Routers/LinksRouter.js";
import usersRouter from "./Routers/UsersRouter.js";
import connectDB from "./DB.js";

const myApp=myExpress();

myApp.use('Links',linksRouter);
myApp.use('Users',usersRouter);

myApp.get("/",()=>{
    console.log("hi");
})

myApp.listen(3000);
connectDB();