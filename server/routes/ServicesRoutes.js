import multer from "multer";
import { verifyToken } from "../middlewares/AuthMiddleware.js";
import { addServices } from "../controllers/ServicesControllers.js";
import { Router } from "express";

export const servicesRoutes = Router();

const upload = multer({dest: "uploads/"})

servicesRoutes.post("/add", verifyToken, upload.array("images"), addServices)