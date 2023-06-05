import express from "express"
import LinksController from "../Controllers/LinksController.js"

const linksRouter=express.Router();

linksRouter.get('/original-link',LinksController.getOriginalLink);
linksRouter.post('/short-link',LinksController.getShortLink);


export default linksRouter;